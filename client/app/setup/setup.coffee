# TODO: clean all of this shit up.

SReactiveVar = require('meteor/simply:strict-reactive-var').default
{ Services } = require 'meteor/simply:external-services-connector'

currentItemIndex = new SReactiveVar Number, 0

currentSelectedImage      = new SReactiveVar Number, 0
currentSelectedCourseInfo = new SReactiveVar Number, 0

weekdays = new SReactiveVar [Object]

schoolId = null
schoolEngineSub = null

# TODO: These methods are not really DRY, even overall ugly.
pictures = ->
	current = currentSelectedImage.get()

	_(externalServices.get())
		.filter (s) -> s.profileData()?.picture?
		.map (s, i) ->
			isSelected: ->
				if current is i
					'selected'
				else
					''
			value: s.profileData().picture
			index: i
			fetchedBy: s.name
			service: _.find Services, name: s.name
		.value()

courseInfos = ->
	current = currentSelectedCourseInfo.get()

	_(externalServices.get())
		.map (s) -> s.profileData()?.courseInfo
		.reject _.isEmpty
		.map (c, i) ->
			isSelected: ->
				if current is i
					'selected'
				else
					''
			value: c
			index: i
		.value()

names = ->
	for service in externalServices.get()
		val = service.profileData()?.nameInfo
		return val if val?
	undefined

addProgress = (item, cb) ->
	ga 'send', 'event', 'setup', 'progress', item
	Meteor.users.update Meteor.userId(), {
		$addToSet: setupProgress: item
	}, cb

# TODO: automatically track progress
ran = no
setupItems = [
	{
		name: 'intro'
		async: no
		success: yes # HACK
		onDone: (cb) -> addProgress 'intro', cb
	}

	{
		name: 'cookies'
		async: no
		onDone: (cb) -> addProgress 'cookies', cb
	}

	{
		name: 'externalServices'
		async: no
		onDone: (cb) ->
			# well, this externalServices global shit stuff is a fucking mess.

			schoolId = _(externalServices.get())
				.map (s) -> s.profileData()?.schoolId
				.find _.negate _.isUndefined

			schoolId ?= getUserField Meteor.userId(), 'profile.schoolId'

			done = (success) ->
				if success?
					addProgress 'externalServices', -> cb yes
				else
					cb no

			loginServices = _.filter externalServices.get(), 'loginNeeded'
			data = _.filter loginServices, (s) -> s.profileData()?
			if loginServices.length > 0 and data.length is 0
				alertModal(
					'Hé!'
					'''
						Je hebt je op geen enkele site ingelogd!
						Hierdoor zal simplyHomework niet automagisch data van sites voor je kunnen ophalen.
						Als je later toch een site wilt toevoegen kan dat altijd in je instellingen.

						Weet je zeker dat je door wilt gaan?
					'''
					DialogButtons.OkCancel
					{ main: 'doorgaan', second: 'woops' }
					{ main: 'btn-danger' }
					main: -> done yes
					second: -> done no
				)
			else
				done yes
	}

	{
		name: 'extractInfo'
		async: no
		onDone: (cb) ->
			schoolQuery = $('#setup #schoolInput').val()

			$firstNameInput = $ '#setup #firstNameInput'
			$lastNameInput = $ '#setup #lastNameInput'
			any = no
			any = yes if empty($firstNameInput, '#firstNameGroup', 'Voornaam is leeg')
			any = yes if empty($lastNameInput, '#lastNameGroup', 'Achternaam is leeg')

			courseInfo = courseInfos()[currentSelectedCourseInfo.get()]?.value
			unless courseInfo?
				$courseInput = $ '#courseInput'
				value = $courseInput.val()

				courseInfo =
					year: parseInt value.replace(/\D/g, '').trim(), 10
					schoolVariant: normalizeSchoolVariant value.replace(/\d/g, '').trim()

				if _.isEmpty value.trim()
					setFieldError '#courseGroup', 'Veld is leeg'
				else unless Number.isInteger courseInfo.year
					setFieldError '#courseGroup', 'Jaartal is niet opgegeven of is niet een getal.'
					any = yes
				else if _.isEmpty courseInfo.schoolVariant
					setFieldError '#courseGroup', 'Schooltype is niet opgegeven.'
					any = yes

			return if any

			Meteor.users.update Meteor.userId(), {
				$addToSet: setupProgress: 'extractInfo'
				$set:
					'profile.schoolId': (
						schoolId ? Schools.findOne({
							name: $regex: schoolQuery, $options: 'i'
						})?._id
					)
					'profile.pictureInfo': (
						val = pictures()[currentSelectedImage.get()]
						if val?
							url: val.value
							fetchedBy: val.fetchedBy
					)
					'profile.courseInfo': courseInfo
					'profile.firstName': Helpers.nameCap $firstNameInput.val()
					'profile.lastName': Helpers.nameCap $lastNameInput.val()
					'profile.birthDate':
						# Picks the date from the first externalService that has one.
						# REVIEW: Maybe we should ask the user too?
						_(externalServices.get())
							.map (s) -> s.profileData()?.birthDate
							.find _.isDate
			}, ->
				cb()
				schoolEngineSub?.stop()
	}

	{
		name: 'getExternalClasses'
		async: yes
		visible: no
		func: (callback) ->
			Meteor.call 'fetchExternalPersonClasses', (e, r) ->
				addProgress 'getExternalClasses', ->
					if e?
						callback false
					else
						Meteor.call 'bootstrapUser'
						callback true
	}

	{
		name: 'privacy'
		async: no
		onDone: (callback) ->
			addProgress 'privacy', -> callback()
	}

	{
		name: 'final'
		func: ->
			addProgress 'first-use', ->
				name = getUserField Meteor.userId(), 'profile.firstName'
				document.location.href = "https://www.simplyhomework.nl/first-use##{name}"
	}
]
running = undefined

###*
# Initializes and starts the setup.
#
# @method runSetup
###
@runSetup = ->
	return undefined if ran
	setupProgress = getUserField Meteor.userId(), 'setupProgress'
	return undefined unless setupProgress?

	running = _.filter setupItems, (item) -> item.name not in setupProgress

	if running.length > 0
		Session.set 'runningSetup', yes
		ran = yes

	undefined

###*
# Moves the setup path one item further.
#
# @method step
# @return {Object} Object that gives information about the progress of the setup path.
###
step = ->
	return if running.length is 0

	cb = (success = yes) ->
		return unless success
		next = running[currentItemIndex.get() + 1]

		unless next?
			running = []
			# TODO: disabled because if an step failed we could get into an infinite
			# loop. Better way to handle this?
			# Also rename this var to `running`, if fixed.
			#ran = no
			Session.set 'runningSetup', no
			return

		callback = (res = true) ->
			currentItemIndex.set currentItemIndex.get() + 1

			next.success = res

			# Continue if the current step doesn't have an UI or if the next.func
			# encountered an error.
			step() if not Template["setup-#{next.name}"]? or not res

		if next.async
			next.func callback
		else
			next.func?()
			callback()

	current = running[currentItemIndex.get()]
	if current? and current.success and current.onDone?
		current.onDone cb

		# onDone handled at least one argument, this means that `cb` will be called,
		# no need to call it ourselves.
		return if current.onDone.length > 0

	cb()
	undefined

progressInfo = ->
	current = currentItemIndex.get()
	length = _(running)
		.reject visible: no
		.value()
		.length

	percentage: (current / length) * 100
	current: current
	amount: length

Template.setup.helpers
	currentSetupItem: ->
		item = running?[currentItemIndex.get()]
		"setup-#{item?.name}"

	progressText: ->
		info = progressInfo()
		"#{info.current + 1}/#{info.amount}"

	progressPercentage: -> progressInfo().percentage

Template.setup.onRendered ->
	@$('#setup').on 'keyup', 'input:last-child', (e) -> step() if e.which is 13

Template.setupFooter.helpers
	isLast: -> _.every running, 'done'

Template.setupFooter.events
	'click button': -> step()

Template['setup-extractInfo'].helpers
	pictures: pictures
	hasSchool: -> schoolId?
	courseInfos: courseInfos
	firstName: -> names()?.firstName
	lastName: -> names()?.lastName

Template['setup-extractInfo'].events
	'click #pictureSelector > img': (event) ->
		currentSelectedImage.set @index

	'click #courseInfoSelector > div': (event) ->
		currentSelectedCourseInfo.set @index

Template['setup-extractInfo'].onRendered ->
	unless schoolId?
		engine = new Bloodhound
			name: 'schools'
			datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.name
			queryTokenizer: Bloodhound.tokenizers.whitespace
			local: []

		schoolEngineSub = Meteor.subscribe 'schools', ->
			engine.add Schools.find().fetch()

		$('#setup #schoolInput')
			.typeahead {
				minLength: 2
			}, {
				source: engine.ttAdapter()
				displayKey: 'name'
			}
