sameUser = -> Meteor.userId() is Router.current().data()._id
sharedHours = new ReactiveVar []

status = ->
	s = Router.current().data().status

	res = (
		if s.idle then "#FF9800"
		else if s.online then "#4CAF50"
		else "#EF5350"
	)

	setPageOptions color: res
	return res

Template.personView.helpers
	backColor: -> status()
	sameUser: sameUser

Template.personView.events
	"click i#reportButton": ->
		modal = $ "#reportUserModal"
		modal.find("input[type='checkbox']").prop "checked", no
		modal.modal()

	"click button#chatButton": -> ChatManager.openUserChat this

Template.personView.onRendered ->
	@autorun ->
		Router.current()._paramsDep.depend()
		Meteor.defer ->
			$('[data-toggle="tooltip"]')
				.tooltip "destroy"
				.tooltip container: "body"

Template.personSharedHours.helpers
	days: ->
		return _(sharedHours.get())
			.uniq (a) -> a.begin().date().getTime()
			.sortBy (a) -> a.begin().getDay() + 1
			.map (a) ->
				return {
					name: Helpers.cap DayToDutch Helpers.weekDay a.begin().date()
					hours: _.filter sharedHours.get(), (x) -> EJSON.equals x.begin().date(), a.begin().date()
				}
			.value()

Template.personSharedHours.rendered = ->
	@autorun ->
		return if sameUser()
		appointments = magisterAppointment new Date(), new Date().addDays(7)

		sharedHours.set _.filter appointments, (a) ->
			currentUserHasHour = a.__groupInfo()?
			personHasHour = _.any Router.current().data().profile.groupInfos, (gi) -> gi.group is a.description()

			return currentUserHasHour and personHasHour

Template.reportUserModal.events
	"click button#goButton": ->
		reportItem = new ReportItem Meteor.userId(), Router.current().data()._id

		checked = $ "div#checkboxes input:checked"
		for checkbox in checked
			reportItem.reportGrounds.push checkbox.closest("div").id

		if reportItem.reportGrounds.length is 0
			shake "#reportUserModal"
			return

		Meteor.call "reportUser", reportItem, (e, r) ->
			$("#reportUserModal").modal "hide"

			name = Router.current().data().profile.firstName
			if e?
				message = switch e.error
					when "rateLimit" then "#{name} is niet gerapporteerd,\nJe rapporteert teveel mensen."
					else "Onbekende fout tijdens het rapporteren"

				notify message, "error"

			else
				notify "#{name} gerapporteerd.", "notice"
