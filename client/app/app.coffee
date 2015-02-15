schoolSub = null
bookSub = null
@snapper = null
magisterClasses = new ReactiveVar null
magisterAssignments = new ReactiveVar []
class @App
	@_setupPathItems:
		tutorial:
			done: yes
			func: ->
				alertModal "Hey!", Locals["nl-NL"].GreetingMessage(), DialogButtons.Ok, { main: "verder" }, { main: "btn-primary" }, {main: ->
					App.step()
				}, no
		magisterInfo:
			done: no
			func: ->
				schoolSub = Meteor.subscribe "schools", -> $("#setMagisterInfoModal").modal backdrop: "static", keyboard: no
		plannerPrefs:
			done: no
			func: ->
				$("#plannerPrefsModal").modal backdrop: "static", keyboard: no
				$("#plannerPrefsModal .modal-header button").remove()
		getMagisterClasses:
			done: no
			func: ->
				bookSub = Meteor.subscribe "books", null, ->
					magisterResult "classes", (e, r) ->
						magisterClasses.set r unless e?

						WoordjesLeren.getAllClasses (result) ->
							for c in r then do (c) ->
								engine = new Bloodhound
									name: "books"
									datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.name
									queryTokenizer: Bloodhound.tokenizers.whitespace
									local: []

								val = _.find(result, (x) -> c.description().toLowerCase().indexOf(x.toLowerCase()) > -1) ? Helpers.cap c.description()

								if /(Natuurkunde)|(Scheikunde)/i.test val
									val = "Natuur- en scheikunde"
								else if /(Wiskunde( (a|b|c|d))?)|(Rekenen)/i.test val
									val = "Wiskunde / Rekenen"
								else if /levensbeschouwing/i.test val
									val = "Godsdienst en levensbeschouwing"

								{ year, schoolVariant } = Meteor.user().profile.courseInfo
								classId = Classes.findOne({_name: val, schoolVariant: schoolVariant, year: year})?._id
								books = Books.find({classId}).fetch() if classId?
								engine.add ({name} for name in _(books).map("title").reject((b) -> _.any result, (x) -> x is b).value())

								do (engine) -> WoordjesLeren.getAllBooks val, (result) -> engine.add result

								Meteor.defer do (engine, c) -> return ->
									$("#magisterClassesResult > div##{c.id()} > input").typeahead(null,
										source: engine.ttAdapter()
										displayKey: "name"
									).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedBookDatum", datum

						Meteor.defer ->
							for x in $("#magisterClassesResult > div").colorpicker(input: null)
								$(x)
									.on "changeColor", (e) -> $(@).attr "colorHex", e.color.toHex()
									.colorpicker "setValue", "##{("00000" + (Math.random() * (1 << 24) | 0).toString(16)).slice -6}"

					$("#getMagisterClassesModal").modal backdrop: "static", keyboard: no

		newSchoolYear:
			done: no
			func: ->
				alertModal "Hey!", Locals["nl-NL"].NewSchoolYear(), DialogButtons.Ok, { main: "verder" }, { main: "btn-primary" }, { main: -> return }, no
		final:
			done: yes
			func: ->
				swalert
					type: "success"
					title: "Klaar!"
					text: "Wil je een complete rondleiding volgen?"
					confirmButtonText: "Rondleiding"
					cancelButtonText: "Afsluiten"
					onSuccess: -> App.runTour()

	@runTour: ->
		Router.go "app"

		tour = null
		tour = new Shepherd.Tour
			defaults:
				classes: 'shepherd-theme-arrows'
				scrollTo: true
				buttons: [
					{
						text: "terug"
						action: -> tour.back arguments...
					}
					{
						text: "verder"
						action: -> tour.next arguments...
					}
				]

		tour.addStep
			text: "Dit is de sidebar, hier kun je op een simpele manier overal komen."
			attachTo: ".sidebar"
			buttons: [
				{
					text: "verder"
					action: -> tour.next arguments...
				}
			]

		tour.addStep
			text: "Dit ben jij, als je op jezelf klikt zie je je profiel."
			attachTo: ".sidebarProfile"

		tour.addStep
			text: "Dit is het overzicht, in principe staat hier alles wat je nodig hebt."
			attachTo: "div.sidebarButton#overview"

		tour.addStep
			text: "Hier staan je taken voor vandaag, als je deze af hebt gewerkt ben je klaar."
			attachTo: "div#overviewTaskContainer"

		tour.addStep
			text: "Hier staan je projecten. Je kunt een nieuwe aanmaken door op het plusje te klikken."
			attachTo: "div#overviewProjectContainer"

		tour.addStep
			text: "Dit is je agenda, hij is slim en overzichtelijk."
			attachTo: "div.sidebarButton#calendar"

		tour.addStep
			text: "Wil je alles van een bepaald vak zien? Klik op de naam en krijg een mooi overzicht."
			attachTo: "div.sidebarClasses"

		tour.addStep
			text: "Hier vind je alle opties van simplyHomework. Je kunt gegevens aanpassen en de planner personaliseren."
			attachTo: "div.sidebarFooterSettingsIcon"

		tour.addStep "calendar",
			text: "Dit is je agenda. Dubbel klik op een lege plek om een afspraak toe te voegen."

		tour.addStep "calendar",
			text: "Hier kun je afspraken toevoegen aan je agenda en navigeren tussen de weken"
			attachTo: "div.fc-right"

		tour.on "show", (o) ->
			Router.go (switch o.step.id
				when "calendar" then "calendar"
				else "app"
			)

			$(".tour-current-active").removeClass "tour-current-active"
			$(o.step.options.attachTo).addClass "tour-current-active"

		tour.on "complete", ->
			Router.go "app"

			swalert
				title: "Dit was de tour!"
				text: "Veel success! Als je hulp nodig hebt kun je altijd via de instellingen deze tour opnieuw doen."
				type: "success"

			Mousetrap.unbind ["escape", "left", "right"]

		tour.start()

		_.defer ->
			$("div.backdrop").one "click", tour.cancel

			Mousetrap.bind "escape", tour.cancel
			Mousetrap.bind "left", ->
				if tour.currentStep.id is "step-0" then tour.cancel()
				else tour.back()
			Mousetrap.bind "right", tour.next

	@_fullCount: 0
	@_running: no

	###*
	# Moves the setup path one item further.
	#
	# @method step
	# @return {Object} Object that gives information about the progress of the setup path.
	###
	@step = ->
		return if @_fullCount is 0

		item = _.find @_setupPathItems, (i) -> not i.done
		unless item?
			@_fullCount = 0
			@_running = no
			return

		item.func()
		item.done = yes

	###*
	# Initializes and starts the setup path.
	#
	# @method followSetupPath
	###
	@followSetupPath: ->
		return if @_running
		@_setupPathItems.plannerPrefs.done = @_setupPathItems.magisterInfo.done = Meteor.user().magisterCredentials?
		@_setupPathItems.getMagisterClasses.done = Meteor.user().classInfos? and Meteor.user().classInfos.length > 0
		@_setupPathItems.newSchoolYear.done = Meteor.user().profile.courseInfo?

		@_fullCount = _.filter(@_setupPathItems, (x) -> not x.done).length
		@_setupPathItems.tutorial.done = @_setupPathItems.final.done = @_fullCount is 0
		@_running = yes

		@step()

# == Bloodhounds ==

@bookEngine = new Bloodhound
	name: "books"
	datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.name
	queryTokenizer: Bloodhound.tokenizers.whitespace
	local: []

classEngine = new Bloodhound
	name: "classes"
	datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.val
	queryTokenizer: Bloodhound.tokenizers.whitespace
	local: []

# == End Bloodhounds ==

# == Modals ==

Template.getMagisterClassesModal.helpers
	magisterClasses: -> magisterClasses.get()

Template.getMagisterClassesModal.rendered = ->
	magisterResult "course", (e, r) ->
		return if e? or amplify.store "courseInfoSet"

		schoolVariant = /[^\d\s]+/.exec(r.type().description)[0].trim().toLowerCase()
		year = (Number) /\d+/.exec(r.type().description)[0].trim()

		Meteor.users.update Meteor.userId(), $set:
			"profile.courseInfo": {
				profile: r.profile()
				alternativeProfile: r.alternativeProfile()
				schoolVariant
				year
			}

		amplify.store "courseInfoSet", yes, expires: 172800000 # We don't want to be spammed under, thank you.

	opts =
		lines: 17
		length: 7
		width: 2
		radius: 18
		corners: 0
		rotate: 0
		direction: 1
		color: "#000"
		speed: .9
		trail: 10
		shadow: no
		hwaccel: yes
		className: "spinner"
		top: "65%"
		left: "50%"

	spinner = new Spinner(opts).spin $("#spinner").get()[0]

Template.getMagisterClassesModal.events
	"click .fa-times": (event) -> magisterClasses.set _.reject magisterClasses.get(), @
	"keyup #method": (event) ->
		@__method = Session.get "currentSelectedBookDatum"
		unless event.target.value is @__method?.name and not _.isEmpty event.target.value
			@__method =
				name: Helpers.cap event.target.value
				id: null

	"click #goButton": ->
		{ year, schoolVariant } = Meteor.user().profile.courseInfo

		Meteor.users.update(Meteor.userId(), $set: classInfos: []) unless Meteor.user().classInfos?

		for c in magisterClasses.get()
			color = $("#magisterClassesResult > div##{c.id()}").attr "colorHex"
			_class = Classes.findOne $or: [{ $where: "\"#{c.description().toLowerCase()}\".indexOf(this.name.toLowerCase()) > -1" }, { course: c.abbreviation().toLowerCase() }], schoolVariant: schoolVariant, year: year
			_class ?= New.class c.description(), c.abbreviation(), year, schoolVariant

			if c.__method?
				book = Books.findOne title: c.__method.name
				unless book? or c.__method.name.trim() is ""
					book = New.book c.__method.name, undefined, c.__method.id, undefined, _class._id

			Meteor.users.update Meteor.userId(), $push: classInfos:
				id: _class._id
				color: color
				magisterId: c.id()
				magisterDescription: c.description()
				magisterAbbreviation: c.abbreviation()
				bookId: book?._id ? null

		$("#getMagisterClassesModal").modal "hide"
		bookSub.stop()
		App.step()

Template.setMagisterInfoModal.events
	"click #goButton": ->
		schoolName = Helpers.cap $("#schoolNameInput").val()
		s = Session.get("currentSelectedSchoolDatum")
		s ?= { url: "" }
		username = $("#magisterUsernameInput").val().trim()
		password = $("#magisterPasswordInput").val()

		school = Schools.findOne { name: schoolName }
		school ?= New.school schoolName, s.url, new Location()

		unless $("#allowGroup input").is ":checked"
			shake "#setMagisterInfoModal"
			return

		Meteor.call "setMagisterInfo", { school, schoolId: school._id, magisterCredentials: { username, password }}, (e, success) ->
			if not e? and success
				$("#setMagisterInfoModal").modal "hide"
				App.step()
				initializeMagister yes
				schoolSub.stop()
			else shake "#setMagisterInfoModal"

Template.setMagisterInfoModal.rendered = ->
	$("#schoolNameInput").typeahead({
		minLength: 3
	}, {
		displayKey: "name"
		source: (query, callback) ->
			MagisterSchool.getSchools query, (e, r) -> callback r unless e?
	}).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedSchoolDatum", datum

dayWeek = [{ friendlyName: "Maandag", name: "monday" }
	{ friendlyName: "Dinsdag", name: "tuesday" }
	{ friendlyName: "Woensdag", name: "wednesday" }
	{ friendlyName: "Donderdag", name: "thursday" }
	{ friendlyName: "Vrijdag", name: "friday" }
	{ friendlyName: "Zaterdag", name: "saturday" }
	{ friendlyName: "Zondag", name: "sunday" }
]

Template.plannerPrefsModal.helpers
	dayWeek: -> dayWeek
	weigthOptions: -> return [ { name: "Geen" }
		{ name: "Weinig" }
		{ name: "Gemiddeld", selected: true }
		{ name: "Veel" }
	]

Template.plannerPrefsModal.rendered = ->
	# Set the data on the modal, if available
	return unless Get.schedular()?

	dayWeeks = _.sortBy _.filter(Get.schedular().schedularPrefs().dates(), (dI) -> !dI.date()? and _.isNumber dI.weekday()), (dI) -> dI.weekday()
	return if dayWeeks.length isnt 7

	for i in [0...dayWeek.length]
		day = dayWeeks[i]
		value = switch day.availableTime()
			when 0 then "Geen"
			when 1 then "Weinig"
			when 2 then "Gemiddeld"
			when 3 then "Veel"
		$("##{dayWeek[i].name}Input").val value

Template.plannerPrefsModal.events
	"click #goButton": =>
		schedular = Get.schedular() ? New.schedular()
		schedularPrefs = new SchedularPrefs
		for day in dayWeek
			schedularPrefs.dates().push new DateInfo @DayEnum[Helpers.cap day.name], switch $("##{day.name}Input").val()
				when "Geen" then 0
				when "Weinig" then 1
				when "Gemiddeld" then 2
				when "Veel" then 3
		schedular.schedularPrefs schedularPrefs
		Meteor.users.update Meteor.userId(), $set: { schedular }

		$("#plannerPrefsModal").modal "hide"

		App.step()

Template.addClassModal.events
	"click #goButton": (event) ->
		name = Helpers.cap $("#classNameInput").val()
		course = $("#courseInput").val().toLowerCase()
		bookName = $("#bookInput").val()
		color = $("#colorInput").val()
		{ year, schoolVariant } = Meteor.user().profile.courseInfo

		_class = Classes.findOne { $or: [{ name: name }, { course: course }], schoolVariant: schoolVariant, year: year}
		_class ?= New.class name, course, year, schoolVariant

		book = Books.findOne title: bookName
		unless book? or bookName.trim() is ""
			book = New.book bookName, undefined, Session.get("currentSelectedBookDatum")?.id, undefined, _class._id

		Meteor.users.update Meteor.userId(), $push: { classInfos: { id: _class._id, color, bookId: book._id }}
		$("#addClassModal").modal "hide"

	"keyup #classNameInput, #courseInput": (event) ->
		val = Helpers.cap $("#classNameInput").val()

		{ year, schoolVariant } = Meteor.user().profile.courseInfo
		classId = Classes.findOne({_name: val, schoolVariant: schoolVariant, year: year})?._id
		books = Books.find({classId}).fetch() if classId?

		if /(Natuurkunde)|(Scheikunde)/i.test val
			val = "Natuur- en scheikunde"
		else if /(Wiskunde( (a|b|c|d))?)|(Rekenen)/i.test val
			val = "Wiskunde / Rekenen"
		else if /levensbeschouwing/i.test val
			val = "Godsdienst en levensbeschouwing"

		WoordjesLeren.getAllBooks val, (result) ->
			result.pushMore ({name} for name in _(books).map("title").reject((b) -> _.any result, (x) -> x is b).value())

			bookEngine.clear()
			bookEngine.add result

Template.addClassModal.rendered = ->
	$("#colorInput").colorpicker color: "#333"
	$("#colorInput").on "changeColor", -> $("#colorLabel").css color: $("#colorInput").val()

	WoordjesLeren.getAllClasses (result) ->
		m = DamerauLevenshtein()
		classes = extraClassList.pushMore(result)
		classes.pushMore _.reject Classes.find().map((c) -> c.name), (c) -> _.any classes, (x) -> m(c, x) < 2 or c.length > 4 and x.length > 4 and (( x.toLowerCase().indexOf(c.toLowerCase()) > -1 ) or ( c.toLowerCase().indexOf(x.toLowerCase()) > -1 ))
		classEngine.add ( { val: s } for s in classes when !_.contains ["Overige talen",
			"Overige vakken",
			"Eigen methodes",
			"Wiskunde / Rekenen",
			"Natuur- en scheikunde",
			"Godsdienst en levensbeschouwing"], s )

	bookEngine.initialize()
	classEngine.initialize()

	$("#bookInput").typeahead(null,
		source: bookEngine.ttAdapter()
		displayKey: "name"
	).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedBookDatum", datum

	$("#classNameInput").typeahead null,
		source: classEngine.ttAdapter()
		displayKey: "val"

Template.settingsModal.events
	"click #schedularPrefsButton": ->
		$("#settingsModal").modal "hide"
		$("#plannerPrefsModal").modal()
	"click #accountInfoButton": ->
		$("#settingsModal").modal "hide"
		$("#accountInfoModal").modal()
	"click #clearInfoButton": ->
		$("#settingsModal").modal "hide"
		alertModal "Hey!", Locals["nl-NL"].ClearInfoWarning(), DialogButtons.OkCancel, { main: "zeker weten" }, { main: "btn-danger" }, main: ->
			Meteor.users.update Meteor.userId(), $set:
				classInfos: null
				"profile.schoolId": null
				"profile.magisterPicture": null
				"profile.groupInfos": null
			Meteor.call "clearMagisterInfo"
			document.location.reload()

	"click #startTourButton": ->
		$("#settingsModal").modal "hide"
		App.runTour()

	"click #logOutButton": ->
		Router.go "launchPage"
		Meteor.logout()

Template.newSchoolYearModal.helpers classes: -> classes()

Template.newSchoolYearModal.events
	"change": (event) ->
		target = $(event.target)
		checked = target.is ":checked"
		classId = target.attr "classid"

		target.find("span").css color: if checked then "lightred" else "white"

Template.accountInfoModal.helpers currentMail: -> Meteor.user().emails[0].address

Template.accountInfoModal.events
	"click #goButton": ->
		mail = $("#mailInput").val().toLowerCase()
		oldPass = $("#oldPassInput").val()
		newPass = $("#newPassInput").val()
		newMail = mail isnt Meteor.user().emails[0].address
		hasNewPass = oldPass isnt "" and newPass isnt ""

		if newMail
			Meteor.call "changeMail", mail
			$("#accountInfoModal").modal "hide"
			unless hasNewPass then swalert title: "Mailadres aangepast", type: "success", text: "Je krijgt een mailtje op je nieuwe email adress voor verificatie"

		if hasNewPass and oldPass isnt newPass
			Accounts.changePassword oldPass, newPass, (error) ->
				if error?.reason is "Incorrect password"
					$("#oldPassInput").addClass("has-error").tooltip(placement: "bottom", title: "Verkeerd wachtwoord").tooltip("show")
				else
					$("#accountInfoModal").modal "hide"
					swalert title: ":D", type: "success", text: "Wachtwoord aangepast! Voortaan kan je met je nieuwe wachtwoord inloggen." + (if newMail then "Je krijgt een mailtje op je nieuwe email adress voor verificatie" else "")
		else if oldPass is newPass
			$("#newPassInput").addClass("has-error").tooltip(placement: "bottom", title: "Nieuw wachtwoord is hetzelfde als je oude wachtwoord.").tooltip("show")

Template.addProjectModal.helpers
	assignments: ->
		_(magisterAssignments.get())
			.filter((a) -> a.deadline() > new Date())
			.map((a) -> _.extend a,
				project: Projects.findOne magisterId: a.id()
				__class: Classes.findOne _.find(Meteor.user().classInfos, (z) -> z.magisterId is a.class().id()).id
			)
			.sortBy((a) -> a.deadline()).sortBy((a) -> a.class().abbreviation())
			.value()

Template.addProjectModal.events
	"click #createButton": ->
		@added = yes
		project = new Project @name(), @description(), @deadline(), @id(), @__class._id, Meteor.userId()
		Projects.insert project, (e) => @added = not e?
		$("#addProjectModal").modal "hide"

	"click .goToProjectButton": (event) ->
		Router.go "projectView", projectId: $(event.target).attr "id"
		$("#addProjectModal").modal "hide"

	"click #goButton": ->
		name = $("#projectNameInput").val().trim()
		description = $("#projectDescriptionInput").val().trim()
		deadline = $("#projectDeadlineInput").data("DateTimePicker").getDate().toDate()
		classId = Session.get("currentSelectedClassDatum")?._id

		return if name is ""

		if $("#projectClassNameInput").val().trim() isnt "" and not classId?
			shake "#addProjectModal"
			return

		New.project name, description, deadline, null, classId, Meteor.userId()

		$("#addProjectModal").modal "hide"

Template.addProjectModal.rendered = ->
	magisterResult "assignments", (e, r) -> magisterAssignments.set r unless e?

	ownClassesEngine = new Bloodhound
		name: "ownClasses"
		datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.name
		queryTokenizer: Bloodhound.tokenizers.whitespace
		local: classes().fetch()

	ownClassesEngine.initialize()

	$("#projectClassNameInput").typeahead(null,
		source: ownClassesEngine.ttAdapter()
		displayKey: "name"
	).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedClassDatum", datum

	$("#projectDeadlineInput").datetimepicker language: "nl", defaultDate: new Date()

# == End Modals ==

# == Sidebar ==

Template.sidebar.helpers
	"classes": -> classes()

Template.sidebar.events
	"click .bigSidebarButton": (event) -> slide $(event.target).attr "id"

	"click .sidebarFooterSettingsIcon": -> $("#settingsModal").modal()
	"click #addClassButton": ->
		# Reset AddClassModal inputs
		$("#classNameInput").val("")
		$("#courseInput").val("")
		$("#bookInput").val("")
		$("#colorInput").colorpicker 'setValue', "#333"

		subs.subscribe "books", null
		$("#addClassModal").modal()

# == End Sidebar ==

Template.app.helpers
	contentOffsetLeft: -> if Session.get "isPhone" then "0" else "200px"
	contentOffsetRight: -> if Session.get "isPhone" then "0" else "50px"

Template.app.rendered = ->
	if "#{Math.random()}"[2] is "2" and "#{Math.random()}"[4] is "2"
		console.error "CRITICAL ERROR: UNEXPECTED KAAS"

	Deps.autorun ->
		if Meteor.user()?.magisterCredentials?
			initializeMagister()

	Deps.autorun (c) ->
		if Meteor.user()? and Meteor.status().connected and not Meteor.user().hasGravatar
			$.get("#{Meteor.user().gravatarUrl}&s=1&d=404").done ->
				Meteor.users.update Meteor.userId(), $set: hasGravatar: yes

	notify("Je hebt je account nog niet geverifiëerd!", "warning") unless Meteor.user().emails[0].verified

	assignmentNotification = null
	recentGradesNotification = null

	magisterResult "assignments soon", (e, r) ->
		return if e? or r.length is 0
		s = "Projecten en opdrachten met deadline binnenkort:\nKlik voor meer info.\n\n"
		_(r).reject((a) -> Projects.find(magisterId: a.id()).count()).forEach (assignment) ->
			d = if (d = assignment.deadline()).getHours() is 0 and d.getMinutes() is 0 then d.addDays(-1) else d
			s += "<b>#{assignment.class().abbreviation()}</b> #{assignment.name()} - #{DayToDutch(Helpers.weekDay(d))}\n"

		Projects.find({deadline: $gt: new Date(), $lt: Date.today().addDays(7)}, transform: projectTransform, sort: "deadline": 1).forEach (project) ->
			d = if (d = project.deadline).getHours() is 0 and d.getMinutes() is 0 then d.addDays(-1) else d
			s += "<b>#{project.__class.course}</b> #{project.name} - #{DayToDutch(Helpers.weekDay(d))}\n"

		if assignmentNotification?
			assignmentNotification.content s, yes
		else
			assignmentNotification = NotificationsManager.notify body: s, type: "warning", time: -1, html: yes, onClick: -> $("#addProjectModal").modal()

	magisterResult "recent grades", (e, r) ->
		return if e? or r.length is 0
		gradeNotificationDismissTime = Meteor.user().gradeNotificationDismissTime

		recentGrades = _.reject r, (g) -> gradeNotificationDismissTime > new Date(g.dateFilledIn())
		unless recentGrades.length is 0
			s = "Recent ontvangen cijfers:\n\n"

			for c in (z.class() for z in _.uniq recentGrades, "_class")
				grades = _.filter recentGrades, (g) -> g.class() is c
				s += "<b>#{c.abbreviation()}</b> - #{grades.map((z) -> if Number(z.grade().replace(",", ".")) < 5.5 then "<b style=\"color: red\">#{z.grade()}</b>" else z.grade()).join ' & '}\n"

			if recentGradesNotification?
				recentGradesNotification.content s, yes
			else
				recentGradesNotification = NotificationsManager.notify body: s, type: "warning", time: -1, html: yes, onDismissed: -> Meteor.users.update(Meteor.userId(), $set: gradeNotificationDismissTime: new Date)

	magisterAppointment new Date(), new Date().addDays(7), (e, r) ->
		tmpGroupInfos = Meteor.user().profile.groupInfos ? []

		for classInfo in (Meteor.user().classInfos ? [])
			magisterGroup = _.find(r, (a) -> a.classes()[0] is classInfo.magisterDescription)?.description()
			groupInfo = _.find tmpGroupInfos, (gi) -> gi.id is classInfo.id

			continue if groupInfo?.group is magisterGroup or not magisterGroup?

			_.remove tmpGroupInfos, id: classInfo.id
			tmpGroupInfos.push _.extend id: classInfo.id, group: magisterGroup

		Meteor.users.update Meteor.userId(), $set: "profile.groupInfos": tmpGroupInfos

	studyGuideChangeNotification = null
	magisterResult "studyGuides", (e, r) ->
		studyGuidesHashes = {}
		oldStudyGuideHashes = Meteor.user().studyGuidesHashes

		for studyGuide in r then do (studyGuide) ->
			parts = _.sortBy ( { id: x.id(), description: x.description(), fileSizes: (z.size() for z in x.files()) } for x in studyGuide.parts ), "id"
			studyGuidesHashes[studyGuide.id()] = md5(EJSON.stringify parts).substring 0, 6

		return if EJSON.equals studyGuidesHashes, oldStudyGuideHashes
		if _.isEmpty(oldStudyGuideHashes)
			Meteor.users.update Meteor.userId(), $set: { studyGuidesHashes }
			return

		s = "Studiewijzers die veranderd zijn:\n\n"
		x = _(studyGuidesHashes)
			.keys()
			.filter((s) -> studyGuidesHashes[s] isnt oldStudyGuideHashes[s])
			.map((id) -> _.find(r, (sg) -> sg.id() is +id))
			.sortBy((sg) -> sg.classCodes()[0])
			.value()

		s += "<b>#{studyGuide.classCodes()[0]}</b> - #{studyGuide.name()}\n" for studyGuide in x

		if studyGuideChangeNotification?
			studyGuideChangeNotification.content s, yes
		else
			studyGuideChangeNotification = NotificationsManager.notify
				body: s
				type: "warning"
				time: -1
				html: yes
				onDismissed: -> Meteor.users.update Meteor.userId(), $set: { studyGuidesHashes }
				onClick: ->
					return unless _.uniq(x, "_class").length is 1
					Router.go "classView", classId: Classes.findOne _.find(Meteor.user().classInfos, (z) -> z.magisterId is x[0].class().id()).id.toHexString()

	val = Meteor.user().profile.birthDate
	now = new Date()
	if val?.getMonth() is now.getMonth() and val?.getDate() is now.getDate() and not amplify.store("congratulated")?
		swalert title: "Gefeliciteerd!", text: "Gefeliciteerd met je #{moment().diff(val, "years")}e verjaardag!"
		amplify.store "congratulated", yes, expires: 172800000

	ChatHeads.initialize()

	Deps.autorun ->
		if Meteor.user()? and not has("noAds") and Meteor.status().connected
			setTimeout (-> Meteor.defer ->
				if !Session.get "adsAllowed"
					Router.go "launchPage"
					Meteor.logout()
					swalert title: "Adblock :c", html: 'Om simplyHomework gratis beschikbaar te kunnen houden zijn we afhankelijk van reclame-inkomsten.\nOm simplyHomework te kunnen gebruiken, moet je daarom je AdBlocker uitzetten.\nWil je toch simplyHomework zonder reclame gebruiken, dan kan je <a href="/">premium</a> nemen.', type: "error"
			), 3000

	if Session.get("isPhone") then setMobile()
	else setShortcuts()

	if !amplify.store("allowCookies") and $(".cookiesContainer").length is 0
		Blaze.render Template.cookies, $("body").get()[0]
		$(".cookiesContainer")
			.css visibility: "initial"
			.velocity { bottom: 0 }, 1200, "easeOutExpo"

		$("#acceptCookiesButton").click ->
			amplify.store "allowCookies", yes
			$(".cookiesContainer").velocity { bottom: "-500px" }, 2400, "easeOutExpo", -> $(@).remove()

setMobile = ->
	snapper = new Snap
		element: $(".content")[0]
		minPosition: -200
		maxPosition: 200
		flickThreshold: 45
		resistance: .9

	$("body").addClass "chatSidebarOpen"

	@closeSidebar = -> snapper.close()

setShortcuts = ->
	Mousetrap.bind ["a", "c"], ->
		Router.go "calendar"
		return no

	Mousetrap.bind "o", ->
		Router.go "app"
		return no

	Mousetrap.bind ["/", "?"], ->
		$("div.searchBox > input").focus()
		return no

	buttonGoto = (delta) ->
		buttons = $(".sidebarButton").get()
		oldIndex = buttons.indexOf $(".sidebarButton.selected").get()[0]
		index = (oldIndex + delta) % buttons.length

		id = buttons[if index is -1 then buttons.length - 1 else index].id
		switch id
			when "overview" then Router.go "app"
			when "calendar" then Router.go "calendar"
			else Router.go "classView", classId: id

	Mousetrap.bind ["shift+up", "shift+k"], ->
		buttonGoto -1
		return no

	Mousetrap.bind ["shift+down", "shift+j"], ->
		buttonGoto 1
		return no

	Mousetrap.bind ["ctrl+/", "command+/", "ctrl+?", "command+?"], ->
		alertModal "Toetsenbord shortcuts", Locals["nl-NL"].KeyboardShortcuts(), DialogButtons.Ok, { main: "Sluiten" }, { main: "btn-primary" }
		return no
