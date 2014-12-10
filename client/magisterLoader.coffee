results = {}
callbacks = {}
currentlyFetching = []
magisterWaiters = []
@magister = null

loaders =
	"classes": (m, cb) ->
		onMagisterInfoResult "course", (e, r) ->
			if e? then cb e, null
			else r.classes (error, result) -> cb error, result

@pushMagisterResult = (name, result) ->
	check name, String

	results[name] = result
	for callback in callbacks[name]?.callbacks ? []
		callback(result.error, result.result)
		callbacks[name].dependency.changed()

@onMagisterInfoResult = (name, callback) ->
	# If callback is null, it will use a tracker to rerun computations, otherwise it will just recall the given callback.
	check name, String
	check callback, Match.Optional Function

	callbacks[name] ?= { callbacks: [], dependency: new Tracker.Dependency }
	if callback? then callbacks[name].callbacks.push callback
	else callbacks[name].dependency.depend()

	if (result = results[name])?
		callback? result.error, result.result
		return result
	else if not _.contains(currentlyFetching, name) and (val = loaders[name])?
		currentlyFetching.push name

		cb = (m) -> val m, (error, result) ->
			_.remove currentlyFetching, name
			pushMagisterResult name, { error, result }

		if magister? then cb magister
		else magisterWaiters.push cb

	return error: null, result: null

@resetMagisterLoader = ->
	results = {}
	callbacks = {}
	currentlyFetching = []
	@magister = null

@loadMagisterInfo = (force = no) ->
	pushResult = @pushMagisterResult
	check force, Boolean
	if not force and @magister? then throw new Error "loadMagisterInfo already called. To force reloading all info use loadMagisterInfo(true)."

	try
		url = Schools.findOne(Meteor.user().profile.schoolId).url
	catch
		console.warn "Couldn't retreive school info!"
		return
	{ username, password } = Meteor.user().magisterCredentials

	(@magister = new Magister({ url }, username, password, no)).ready (m) ->
		cb m for cb in magisterWaiters
		magisterWaiters = []

		m.appointments new Date().addDays(-4), new Date().addDays(7), no, (error, result) -> # Currently we AREN'T downloading the persons.
			pushResult "appointments this week", { error, result }
			unless error?
				pushResult "appointments tomorrow", error: null, result: _.filter result, (a) -> EJSON.equals a.begin().date(), Date.today().addDays(1)
				pushResult "appointments today", error: null, result: _.filter result, (a) -> EJSON.equals a.begin().date(), Date.today()
			else
				pushResult "appointments tomorrow", { error, result: null }
				pushResult "appointments today"

		m.courses (e, r) ->
			if e?
				pushResult "course", { error: e, result: null }
				pushResult "grades", { error: e, result: null }
			else
				r[0].grades no, (error, result) -> pushResult "grades", { error, result }
				pushResult "course", { error: null, result: r[0] }

		m.assignments no, (error, result) ->
			pushResult "assignments", { error, result }
			if error? then pushResult "assignments soon", { error, result: null }
			else pushResult "assignments soon", error: null, result: _.filter(result, (a) -> a.deadline().date() < Date.today().addDays(7) and not a.finished() and new Date() < a.deadline())

	return "dit geeft echt niets nuttig terug ofzo, als je dat denkt."