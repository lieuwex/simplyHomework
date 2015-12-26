chatRoom = ->
	ChatRooms.findOne {
		_id: FlowRouter.getParam('id')
	}, {
		fields:
			lastMessageTime: 0
	}

Template.mobileChatWindow.helpers
	chat: -> chatRoom()

Template.mobileChatWindow.events
	"click div.header": ->
		switch @type
			when 'private'
				FlowRouter.go 'personView', id: @user()._id
			when 'project'
				FlowRouter.go 'projectView', id: @project()._id.toHexString()

	"keyup input#messageInput": (event, template) ->
		content = event.target.value.trim()

		if event.which is 13 and content.length > 0
			Meteor.call 'addChatMessage', content, FlowRouter.getParam('id')

			event.target.value = ''
			template.sendToBottom()

Template.mobileChatWindow.onCreated ->
	@sticky = yes
	@subscribe 'basicChatInfo', onReady: =>
		room = chatRoom()
		if room?
			@subscribe 'status', room.users
			setPageOptions
				title: room.friendlyName()
				color: null
		else
			notFound()

Template.mobileChatWindow.onRendered ->
	slide()
