NoticeManager.provide 'nextLesson', ->
	minuteTracker.depend()
	sub = Meteor.subscribe 'externalCalendarItems', Date.today(), Date.today().addDays 1, yes

	today = CalendarItems.find({
		userIds: Meteor.userId()
		startDate: $gte: Date.today()
		endDate: $lte: Date.today().addDays 1
		scrapped: false
		schoolHour:
			$exists: yes
			$ne: null
	}, sort: 'startDate': 1).fetch()
	nextAppointmentToday = _.find today, (a) -> new Date() < a.startDate

	if nextAppointmentToday?
		template: 'infoNextLesson'
		data: nextAppointmentToday
		ready: -> sub.ready()

		header: 'Volgend Lesuur'
		subheader: (
			c = nextAppointmentToday.class()
			c?.name ? nextAppointmentToday.description
		)
		priority: if Math.abs(_.now() - nextAppointmentToday.startDate) < 300000 then 4 else 2

		onClick:
			action: 'route'
			route: 'calendar'
			params:
				time: +Date.today()
	else
		ready: -> sub.ready()

Template.infoNextLesson.helpers
	timeLeft: ->
		minuteTracker.depend()
		Helpers.timeDiff new Date(), @startDate
