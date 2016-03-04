editMessageId = new ReactiveVar
lastInputs = new Map

send = (content, updateId) ->
	content = content.trim()
	return if content.length is 0

	if updateId?
		Meteor.call 'updateChatMessage', content, updateId
	else
		Meteor.call 'addChatMessage', content, @_id

	document.getElementById('messageInput').value = ''

Template.fullscreenChatWindow.helpers
	__editing: -> if editMessageId.get()? then 'editing' else ''

Template.fullscreenChatWindow.events
	"click #header": (e) ->
		FlowRouter.withReplaceState =>
			if @type is 'private'
				FlowRouter.go 'personView', id: @user()._id
			else if @type is 'project'
				FlowRouter.go 'projectView', id: @project()._id
			else if @type is 'class' and @class()?
				FlowRouter.go 'classView', id: @class()._id

	"click .closeChat": -> ChatManager.closeChat()

	'click .sendButton': (event) ->
		$input = document.getElementById 'messageInput'
		send.call this, $input.value
		window.sendToBottom()
		$input.focus()

	"keyup input#messageInput": (event) ->
		content = event.target.value

		previousMessage = =>
			ChatMessages.findOne {
				creatorId: Meteor.userId()
				chatRoomId: @_id
			}, {
				sort: 'time': -1
			}

		if event.which is 38
			# edit the previous message.
			message = previousMessage()
			event.target.value = message._originalContent
			editMessageId.set message._id
		else if event.which is 40 and editMessageId.get()?
			# stop editing the previous mesasge.
			event.target.value = ''
			editMessageId.set undefined

		else if event.which is 27
			ChatManager.closeChat()

		else if event.which is 13
			if Helpers.sed(content)
				message = previousMessage()
				if message?
					changed = Helpers.sed content, message._originalContent
					send.call this, changed, message._id
				else
					event.target.value = ''
			else
				send.call this, content, editMessageId.get()
				editMessageId.set undefined

			window.sendToBottom()

	'blur input#messageInput': (event) ->
		event.target.focus()

Template.fullscreenChatWindow.onCreated ->
	@subscribe 'status', @data.users

Template.fullscreenChatWindow.onRendered ->
	$messageInput = document.getElementById 'messageInput'
	$messageInput.focus()

	val = lastInputs.get @data._id
	if val
		$messageInput.value = val
		lastInputs.delete @data._id

	@onUnload = (e) =>
		if $messageInput.value.trim().length > 0
			str = "Je was een bericht aan het typen naar #{@data.friendlyName()}"
			e.returnValue = str
			str
	window.addEventListener 'beforeunload', @onUnload

Template.fullscreenChatWindow.onDestroyed ->
	val = document.getElementById('messageInput').value
	unless _.isEmpty val
		lastInputs.set @data._id, val

	window.removeEventListener 'beforeunload', @onUnload
	delete @onUnload
