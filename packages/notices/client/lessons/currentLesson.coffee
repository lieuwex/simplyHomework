NoticeManager.provide 'currentLesson', ->
	minuteTracker.depend()
	@subscribe 'externalCalendarItems', Date.today(), Date.today().addDays 1

	currentAppointment = CalendarItems.findOne {
		userIds: Meteor.userId()
		startDate: $lt: new Date
		endDate: $gt: new Date
		scrapped: false
		schoolHour:
			$exists: yes
			$ne: null
	}

	if currentAppointment?
		template: 'infoCurrentAppointment'
		data: currentAppointment

		header: 'Huidig Lesuur'
		subheader: (
			c = currentAppointment.class()
			c?.name ? currentAppointment.description
		)
		priority: 3

		onClick:
			action: 'route'
			route: 'calendar'
			params:
				time: +Date.today()
			queryParams:
				openCalendarItemId: currentAppointment._id

Template.infoCurrentAppointment.helpers
	timeLeft: ->
		minuteTracker.depend()
		Helpers.timeDiff new Date(), @endDate
