sameUser = -> Meteor.userId() is Router.current().data()._id
pictures = new ReactiveVar []
loadingPictures = new ReactiveVar yes

Template.personView.helpers
	backColor: ->
		res = (
			if @status.idle then "#FF9800"
			else if @status.online then "#4CAF50"
			else "#EF5350"
		)

		setPageOptions color: res
		res
	sameUser: sameUser

Template.personView.events
	'click .personPicture': ->
		return unless sameUser()
		ga 'send', 'event', 'button', 'click', 'personPicture'
		showModal 'changePictureModal'

	'click i#reportButton': ->
		ga 'send', 'event', 'button', 'click', 'reportButton'
		showModal 'reportUserModal', undefined, Router.current().data

	"click button#chatButton": -> ChatManager.openUserChat this

Template.personView.onRendered ->
	@subscribe 'externalCalendarItems', Date.today(), Date.today().addDays 7

	@autorun ->
		Router.current()._paramsDep.depend()
		Meteor.defer ->
			$('[data-toggle="tooltip"]')
				.tooltip "destroy"
				.tooltip container: "body"

Template.personSharedHours.helpers
	days: ->
		return [] if sameUser()

		sharedCalendarItems = CalendarItems.find(
			$and: [
				{ userIds: Meteor.userId() }
				{ userIds: Router.current().data()._id }
			]
			startDate: $gte: Date.today()
			endDate: $lte: Date.today().addDays 7
			schoolHour:
				$exists: yes
				$ne: null
		).fetch()

		_(sharedCalendarItems)
			.uniq (a) -> a.startDate.date().getTime()
			.sortBy (a) -> a.startDate.getDay() + 1
			.map (a) ->
				name: Helpers.cap DayToDutch Helpers.weekDay a.startDate.date()
				hours: _.filter sharedCalendarItems, (x) -> EJSON.equals x.startDate.date(), a.startDate.date()
			.value()

Template.reportUserModal.events
	'click button#goButton': ->
		ga 'send', 'event', 'action', 'report'
		reportItem = new ReportItem Meteor.userId(), Router.current().data()._id

		checked = $ 'div#checkboxes input:checked'
		for checkbox in checked
			reportItem.reportGrounds.push checkbox.closest('div').id

		if reportItem.reportGrounds.length is 0
			shake '#reportUserModal'
			return

		$('#reportUserModal').modal 'hide'
		Meteor.call 'reportUser', reportItem, (e, r) ->
			name = Router.current().data().profile.firstName
			if e?
				message = switch e.error
					when 'rateLimit' then "#{name} is niet gerapporteerd,\nJe rapporteert teveel mensen."
					else 'Onbekende fout tijdens het rapporteren'

				notify message, 'error'

			else
				notify "#{name} gerapporteerd.", 'notice'

Template.changePictureModal.onRendered ->
	getProfileDataPerService (e, r) ->
		if e?
			notify "Fout tijdens het ophalen van de foto's", 'error'
			Kadira.trackError 'ChangePictureModal', e.toString(), stacks: EJSON.stringify e
			$('#changePictureModal').modal 'hide'
		else
			pictures.set(
				_(r)
					.pairs()
					.map ([ key, val ]) ->
						fetchedBy: key
						value: val.picture
						selected: ->
							if key is Meteor.user().profile.pictureInfo.fetchedBy
								'selected'
							else
								''
					.value()
			)

Template.changePictureModal.helpers
	pictures: -> pictures.get()
	loadingPictures: -> _.isEmpty pictures.get()

Template.pictureSelectorItem.events
	'click': (event) ->
		Meteor.users.update Meteor.userId(), $set:
			'profile.pictureInfo':
				url: @value
				fetchedBy: @fetchedBy

		$('#changePictureModal').modal 'hide'
