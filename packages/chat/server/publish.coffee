Meteor.publishComposite 'basicChatInfo', ->
	@unblock()
	find: ->
		ChatRooms.find {
			users: @userId
		},
			limit: 50 # REVIEW: is this a good value?
			sort:
				lastMessageTime: -1
	children: [{
		find: (room) ->
			ChatMessages.find {
				chatRoomId: room._id
				creatorId: $ne: @userId
				readBy: $ne: @userId
			}, sort:
				'time': -1
	}, {
		find: (room) ->
			Meteor.users.find {
				_id:
					$in: room.users
					$ne: @userId
			}, fields:
				# HACK: We publish too much here to fix an issue where when switching to
				# personView from chat wouldn't load all the new data (mergebox
				# problem?)
				profile: 1
				'status.online': 1
				'status.idle': 1
	}, {
		find: (room) ->
			Projects.find {
				_id: room.projectId
			}, fields:
				name: 1
	}]

Meteor.publish 'chatMessages', (chatRoomId, limit) ->
	@unblock()

	check chatRoomId, String
	check limit, Number

	unless @userId
		@ready()
		return undefined

	room = ChatRooms.findOne
		_id: chatRoomId
		users: @userId

	unless room?
		@ready()
		return undefined

	# Makes sure we're getting a number in a base of of 10. This is so that we
	# minimize the amount of unique cursors in the mergebox.
	# This shouldn't be needed since the client only increments the limit by ten,
	# but we want to make sure it is server side too.
	limit = limit + 9 - (limit - 1) % 10

	cursor =
		ChatMessages.find {
			chatRoomId
		}, {
			limit: limit
			sort: 'time': -1
		}

	handle = cursor.observeChanges
		added: (id, record) =>
			@added 'chatMessages', id, record

		changed: (id, record) =>
			@changed 'chatMessages', id, record

		###
		removed: (id) =>
			@removed 'chatMessages', id
		###

	@ready()
	@onStop ->
		handle.stop()

Meteor.publish 'messageCount', (chatRoomId) ->
	check chatRoomId, String
	@unblock()

	room = (
		if @userId?
			ChatRooms.findOne
				_id: chatRoomId
				users: @userId
	)

	if room?
		Counts.publish this, 'chatMessageCount', ChatMessages.find { chatRoomId }
	else
		@ready()

	undefined
