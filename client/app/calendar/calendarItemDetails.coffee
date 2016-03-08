Template.calendarItemDetails.helpers
	people: ->
		if @type is 'schoolwide'
			[]
		else
			Meteor.users.find
				_id:
					$in: @userIds ? []
					$ne: Meteor.userId()
	relativeTime: -> @relativeTime? yes
	contentDescription: ->
		description = @content?.description
		if description?
			Helpers.convertLinksToAnchor _.escape description

	fileCount: -> @files.length
	files: ->
		@files()
			.map (file) -> file.buildAnchorTag().outerHTML
			.join ', '

	hasChat: ->
		ChatRooms.find(
			type: 'class'
			'classInfo.ids': @classId
		).count() > 0

Template.calendarItemDetails.events
	'click [data-action="chat"]': (event) ->
		event.preventDefault()
		ChatManager.openClassChat @classId if @classId?

Template.calendarItemDetails.onCreated ->
	@subscribe 'files', @data?.fileIds ? []

	unless @data.type is 'schoolwide'
		userIds = _.take @data?.userIds, 40
		@subscribe 'usersData', userIds

Template.calendarItemDetailsPerson.onRendered ->
	if Helpers.isDesktop()
		@$('[data-toggle="tooltip"]').tooltip
			container: 'body'
			placement: 'bottom'
