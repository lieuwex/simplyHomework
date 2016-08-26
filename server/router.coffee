WebApp.connectHandlers.use '/privacy', (req, res) ->
	res.writeHead 301, 'Location': 'https://www.simplyhomework.nl/privacy.html'
	res.end()

# oldbrowser
WebApp.connectHandlers.use (req, res, next) ->
	browser = WebAppInternals.identifyBrowser req.headers['user-agent']
	if browser.name isnt 'ie' or browser.major >= 9
		next()
	else
		Analytics.insert
			type: 'old-browser'
			date: new Date
			browser: browser
			userAgent: req.headers['user-agent']
			ip: req.headers['x-forwarded-for'] ? req.connection.remoteAddress

		Assets.getText 'oldBrowser.html', (e, r) ->
			res.writeHead 200
			if e?
				res.end '''
					Je browser is verouderd :(
					We raden Chrome en Firefox aan.
				'''
			else
				res.end r

	undefined

FastRender.onAllRoutes ->
	# Don't subscribe on 'basicChatInfo' here, this will mess up the notification
	# handling (will sound a dong when there are unread messages when the app is
	# opened.).

	if @userId?
		@subscribe 'fr_classes'

FastRender.route '/calendar/:date?', (params) ->
	date = (
		time = +params.date
		if isFinite time
			new Date time
		else
			new Date
	)
	@subscribe(
		'externalCalendarItems'
		date.addDays -1
		date.addDays 2
	)
	@subscribe 'classes', all: yes

FastRender.route '/person/:id', (params) ->
	@subscribe 'status', [ params.id ]
	@subscribe 'usersData', [ params.id ]

FastRender.route '/class/:id', (params) ->
		@subscribe 'externalStudyUtils', classId: params.id
		@subscribe 'externalGrades', classId: params.id
		@subscribe 'classInfo', params.id

FastRender.route '/chat/:id', (params) ->
	@subscribe 'chatMessages', params.id, 40
