NoticeManager.provide 'serviceUpdates', ->
	unless getUserField Meteor.userId(), 'settings.devSettings.serviceUpdateNotices'
		return []

	@subscribe 'serviceUpdates'

	ServiceUpdates.find({}).map (u) ->
		id: u._id
		header: u.header
		template: 'serviceUpdateNotice'
		priority: u.priority - 10
		data: u
