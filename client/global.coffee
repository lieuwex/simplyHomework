@classes = ->
	tmp = []
	for tmpClass in _.sortBy(Classes.find(_id: { $in: (cI.id for cI in (Meteor.user().classInfos ? [])) }).fetch(), (c) -> c.name())
		tmp.push _.extend tmpClass,
			__taskAmount: _.filter(homeworkItems.get(), (a) -> Meteor.user().profile.groupInfos.smartFind(tmpClass._id, (i) -> i.id).group is a.description() and not a.isDone()).length#Helpers.getTotal _.reject(GoaledSchedules.find(_homework: { $exists: true }, ownerId: Meteor.userId()).fetch(), (gS) -> !EJSON.equals(gS.classId(), tmpClass._id)), (gS) -> gS.tasksForToday().length
			__color: Meteor.user().classInfos.smartFind(tmpClass._id, (cI) -> cI.id).color
			__book: tmpClass.books().smartFind Meteor.user().classInfos.smartFind(tmpClass._id, (cI) -> cI.id).bookId, (b) -> b._id
			__sidebarName: if (val = tmpClass.name()).length > 14 then tmpClass.course() else val
			__showBadge: not _.contains [11..14], tmpClass.name().length
	return tmp

@projects = ->
	tmp = []
	for tmpProject in Projects.find(_participants: Meteor.userId()).fetch()
		tmp.push _.extend tmpProject,
			__class: classes().smartFind tmpProject.classId(), (c) -> c._id
	return tmp

@kaas = ->
	unless Meteor.user()?
		alertModal "swag", "420 blze it\nKaas FTW"
	else
		alertModal "swag", "420 blze it\nKaas FTW\n\ndo u even lift #{Meteor.user().profile.firstName}?"
	audio = new Audio
	audio.src = "/audio/smoke weed everyday.wav"
	audio.play()
	return "420 blaze cheese"

@has = (feature) ->
	try
		return Meteor.user().premiumInfo[feature].deadline > new Date()
	catch
		return no

isOldInternetExplorer = ->
	if navigator.appName is "Microsoft Internet Explorer"
		version = parseFloat RegExp.$1 if /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)?
		return [ version < 9.0, version ]
	return false

@secondTracker = new Tracker.Dependency
Meteor.startup ->
	window.viewportUnitsBuggyfill.init()
	NProgress.configure showSpinner: no
	[oldBrowser, version] = isOldInternetExplorer()

	if oldBrowser # old Internet Explorer versions don't even support fast-render with iron-router :')
		$("body").text ""
		Blaze.render Template.oldBrowser, $("body").get()[0]
		ga "send", "event", "reject",  "old-browser", "" + version
	else if "ActiveXObject" of window # Some css fixes for IE
		$("head").append "<style>.vCenter { position: relative !important } span#addProjectIcon { padding-right: 30px !important } div.backdrop { display: none; }</style>"
	
	# Some css fixes for Windows
	if navigator.appVersion.indexOf("Win") isnt -1
		$("head").append '<style>.robotoThin, .btn-trans { font-weight: 300 !important } * { -webkit-font-smoothing: initial !important }</style>'

	$.getScript "/js/advertisement.js" # adblock detection trick ;D

	Session.set "sidebarOpen", not Session.get "isPhone"

	Deps.autorun -> try UserStatus.startMonitor idleOnBlur: true

	interval = null
	Deps.autorun -> # User Login/Logout
		if Meteor.user()?
			ga "set", "&uid", Meteor.userId()

			# Automagically update Magister info.
			interval ?= Meteor.setInterval ( ->
				loadMagisterInfo yes if Meteor.status().connected
			), 1200000
		else
			for key in _.keys amplify.store() when key.substring(0, 22) is "hardCachedAppointments"
				amplify.store key, null

			resetMagisterLoader()
			Meteor.clearInterval interval

			NotificationsManager.hideAll()

	Meteor.setInterval (-> secondTracker.changed()), 1000

	ignoreMessages = [ "Server sent add for existing id"
		"Expected not to find a document already present for an add"
		"Script error."
	]
	window.onerror = (message, url, lineNumber) -> Meteor.call "log", "error", "Uncaught error at client: #{message} | #{url}:#{lineNumber}" unless _.some ignoreMessages, (m) -> Helpers.contains message, m