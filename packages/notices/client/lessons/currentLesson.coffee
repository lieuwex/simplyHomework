dep = new Tracker.Dependency()
setInterval (->
	dep.changed()
), ms.seconds 5

NoticeManager.provide 'currentLesson', ->
	minuteTracker.depend()
	@subscribe 'externalCalendarItems', Date.today(), Date.today().addDays 1

	currentAppointment = ScheduleFunctions.currentLesson()
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

	percentage: ->
		dep.depend()

		duration = @endDate - @startDate
		timeIn = new Date() - @startDate
		100 * (timeIn / duration)
