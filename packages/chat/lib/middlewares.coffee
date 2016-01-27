###*
# @class ChatMiddlewares
# @static
###
ChatMiddlewares =
	_middlewares: []
	###*
	# Attaches a middleware. Order sensetive.
	#
	# @method attach
	# @param {String} name
	# @param {String} platform
	# @param {String} fn
	###
	attach: (name, platform, fn) ->
		check name, String
		check platform, String
		check fn, Function

		item = { name, platform, fn }

		@_middlewares.push item

	###*
	# Runs the given `message` through every middleware in order.
	# @method run
	# @param {ChatMessage} message
	# @param {String} [platform] The platform to run the middlewares for, if none is given one will automatically be chosen.
	# @return {ChatMessage}
	###
	run: (message, platform) ->
		platform ?= if Meteor.isClient then 'client' else 'server'

		for item in _.filter(@_middlewares, { platform })
			try
				message = item.fn message
			catch e
				console.warn "Message middleware '#{item.name}' errored.", e
				Kadira.trackError 'middleware-failure', e.toString(), stacks: JSON.stringify e

		message

# Always keep this middleware on top, please.
ChatMiddlewares.attach 'preserve original content', 'client', (message) ->
	message._originalContent = message.content
	message

escapeMap = [
	[ /</g, '&lt;' ]
	[ />/g, '&gt;' ]
]
ChatMiddlewares.attach 'escape', 'client', (message) ->
	s = message.content

	for [ reg, val ] in escapeMap
		s = s.replace reg, val

	message.content = s
	message

ChatMiddlewares.attach 'shitdown', 'client', (message) ->
	s = message.content

	s = s.replace /###(.+)/g, '<h3>$1</h3>'
	s = s.replace /##(.+)/g, '<h2>$1</h2>'
	s = s.replace /#(.+)/g, '<h1>$1</h1>'
	s = s.replace /([_*])\1(.*?)\1\1/g, '<strong>$2</strong>'
	s = s.replace /([_*])(.*?)\1/g, '<em>$2</em>'

	message.content = s
	message

chatReplacements = [
	[[ '(y)'                ], ':thumbsup:'        ]
	[[ '(n)'                ], ':thumbsdown:'      ]
	[[ '(a)'                ], ':innocent:'        ]
	[[ '(h)'                ], ':sunglasses:'      ]
	[[ '^^'                 ], ':sweat_smile:'     ]
	[[ ':fissa:', ':hype:'  ], ':tada:'            ]
	[[ ':kaas:'             ], ':cheese:'          ]
	[[ ':fu:'               ], ':middle_finger:'   ]
	[[ '/shrug/', ':shrug:' ], '¯\\_(ツ)_/¯' ]
]
ChatMiddlewares.attach 'convert smileys', 'client', (message) ->
	unless getUserField Meteor.userId(), 'settings.devSettings.noChatEmojis'
		s = message.content

		for [ keys, value ] in chatReplacements
			for key in keys
				s = s.split(key).join value

		matchesOrig = Helpers.allMatches /`[^`]*`/g, message.content
		matchesNew = Helpers.allMatches /`[^`]*`/g, s
		for match, i in matchesOrig
			s = s.replace matchesNew[i], match

		message.content = s
	message

ChatMiddlewares.attach 'code blocks', 'client', (message) ->
	message.content = message.content.replace /`([^`]*)`/g, '<code>$1</code>'
	message

ChatMiddlewares.attach 'links', 'client', (message) ->
	message.content = Helpers.convertLinksToAnchor message.content
	message

ChatMiddlewares.attach 'emojione', 'client', (message) ->
	unless getUserField Meteor.userId(), 'settings.devSettings.noChatEmojis'
		message.content = emojione.toImage message.content
	message

ChatMiddlewares.attach 'katex', 'client', (message) ->
	message.content = message.content.replace /\$\$(.+)\$\$/, (match, formula) ->
		try katex.renderToString formula
		catch then match

	message

ChatMiddlewares.attach 'add hidden fields', 'client', (cm) ->
	own = Meteor.userId() is cm.creatorId
	_.extend cm,
		__sender: Meteor.users.findOne cm.creatorId
		__own: if own then 'own' else ''
		__new: if own or Meteor.userId() in cm.readBy then '' else 'new'
		__time: Helpers.formatDate cm.time
		__changedOn: Helpers.formatDate cm.changedOn
		__pending: if cm.pending then 'pending' else ''
		__readBy: ->
			Meteor.users.find {
				_id:
					$in: cm.readBy
					$nin: [ Meteor.userId(), cm.creatorId ]
			}, {
				limit: 3
			}

ChatMiddlewares.attach 'clickable names', 'insert', (message) ->
	schoolId = Meteor.user().profile.schoolId
	users = _(message.content)
		.split /\W/
		.map (word) -> Helpers.nameCap word
		.map (word, i) ->
			Meteor.users.findOne {
				_id: $nin: [ Meteor.userId(), message.creatorId ]
				$or: [
					{ 'profile.firstName': word }
					{ 'profile.lastName': word }
				]
				'profile.firstName': $ne: ''
				'profile.schoolId': schoolId
			}, {
				fields:
					_id: 1
					'profile.firstName': 1
					'profile.lastName': 1
					'profile.schoolId': 1
			}
		.compact()
		.uniq '_id'
		.value()

	for user in users
		{ firstName, lastName } = user.profile
		regex = new RegExp "@?(#{firstName} #{lastName}|#{firstName}|#{lastName})", 'ig'
		message.content = message.content.replace regex, (str) ->
			path = FlowRouter.path 'personView', id: user._id
			"<a href='#{path}' class='name'>#{str}</a>"

	message

@ChatMiddlewares = ChatMiddlewares
