NoticeManager.provide 'currentLesson', ->
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
	currentAppointment = _.find today, (a) -> a.startDate < new Date() < a.endDate

	if currentAppointment?
		template: 'infoCurrentAppointment'
		data: currentAppointment
		ready: -> sub.ready()

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
	else
		ready: -> sub.ready()

Template.infoCurrentAppointment.helpers
	timeLeft: ->
		minuteTracker.depend()
		Helpers.timeDiff new Date(), @endDate
