currentProject = -> Router.current().data()
cachedProjectFiles = new ReactiveVar {}

@getParticipants = ->
	tmp = []
	for participant, i in Meteor.users.find({_id: $in: currentProject().participants}, sort: "profile.firstName": 1).fetch()
		tmp.push _.extend participant,
			__statusColor: if participant.status.idle then "#FF851B" else if participant.status.online then "#2ECC40" else "#FF4136"
	return tmp

@getOthers = ->
	tmp = []
	for other, i in Meteor.users.find(_id: $nin: currentProject().participants).fetch()
		tmp.push _.extend other,
			fullName: "#{other.profile.firstName} #{other.profile.lastName}"
	return tmp

fileTypes =
	"application/vnd.google-apps.document":
		fileTypeIconClass: "file-text-o"
		fileTypeColor: "#32A8CE"
	"application/vnd.google-apps.spreadsheet":
		fileTypeIconClass: "file-powerpoint-o"
		fileTypeColor: "#F4B400"
	"application/vnd.google-apps.presentation":
		fileTypeIconClass: "file-excel-o"
		fileTypeColor: "#0F9D58"
	"application/pdf":
		fileTypeIconClass: "file-pdf-o"
		fileTypeColor: "#CF1312"

@personsEngine = new Bloodhound
	name: "persons"
	datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.fullName
	queryTokenizer: Bloodhound.tokenizers.whitespace
	local: []

Template.projectView.rendered = =>
	Deps.autorun =>
		return unless Router.current().route.getName() is "projectView"
		@personsEngine.clear()
		@personsEngine.add getOthers()

	loading = []
	Tracker.autorun ->
		return unless driveLoaded.get() and Router.current().route.getName() is "projectView"

		x = cachedProjectFiles.get()
		fileIds = _.reject currentProject().driveFileIds, (s) -> s in x or _.contains loading, s
		needed = fileIds.length

		push = (r) ->
			x[r.id] = r
			if --needed is 0 then cachedProjectFiles.set x

		for driveFileId in fileIds
			loading.push driveFileId
			gapi.client.drive.files.get(fileId: driveFileId).execute (r) ->
				push _.extend r, fileTypes[r.mimeType]

				_.remove loading, r.id

Template.projectView.helpers
	files: ->
		_(cachedProjectFiles.get())
			.values()
			.filter((f) -> _.contains currentProject().driveFileIds, f.id)
			.sortBy((f) -> new Date(Date.parse f.modifiedDate).getTime())
			.reverse()
			.value()
	persons: -> _.reject getParticipants(), (p) -> EJSON.equals p._id, Meteor.userId()

	showRightHeader: -> if currentProject().participants.length is 1 then false else true
	friendlyDeadline: ->
		return "" unless currentProject().deadline?
		day = DayToDutch Helpers.weekDay currentProject().deadline
		time = "#{Helpers.addZero currentProject().deadline.getHours()}:#{Helpers.addZero currentProject().deadline.getMinutes()}"

		return (switch Helpers.daysRange new Date(), currentProject().deadline
			when -6, -5, -4, -3 then "Afgelopen #{day}"
			when -2 then "Eergisteren"
			when -1 then "Gisteren"
			when 0 then "Vandaag"
			when 1 then "Morgen"
			when 2 then "Overmorgen"
			when 3, 4, 5, 6 then "Aanstaande #{day}"
			else "#{Helpers.cap day} #{DateToDutch(currentProject().deadline, no)}") + " " + time
	heightOffset: -> if has("noAds") then 260 else 350

Template.projectView.events
	"mouseenter .projectHeader": -> unless Session.get "isPhone" then $("#changeProjectIcon").velocity { opacity: 1 }, 100
	"mouseleave .projectHeader": -> unless Session.get "isPhone" then $("#changeProjectIcon").velocity { opacity: 0 }, 100

	"click #addFileIcon": ->
		onPickerResult (r) ->
			return unless r.action is "picked"
			cb = -> Projects.update currentProject()._id, $push: driveFileIds: r.docs[0].id

			if _.any(r.docs[0].permissions, (p) -> p.type is "anyone" and p.role is "writer") then cb()
			else
				gapi.client.drive.permissions.insert(
					fileId: r.docs[0].id
					resource:
						type: "anyone"
						role: "writer"
				).execute cb

	"click #addPersonIcon": ->
		subs.subscribe "usersData"
		$("#personNameInput").val ""
		$("#addParticipantModal").modal backdrop: no

	"click #changeProjectIcon": ->
		ga "send", "event", "button", "click", "projectInfoChange"

		$("#changeDeadlineInput").datetimepicker language: "nl", defaultDate: currentProject().deadline

		ownClassesEngine = new Bloodhound
			name: "ownClasses"
			datumTokenizer: (d) -> Bloodhound.tokenizers.whitespace d.name
			queryTokenizer: Bloodhound.tokenizers.whitespace
			local: classes()

		ownClassesEngine.initialize()

		$("#changeClassInput").typeahead(null,
			source: ownClassesEngine.ttAdapter()
			displayKey: "name"
		).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedClassDatum", datum

		$("#changeProjectModal").modal backdrop: false

Template.changeProjectModal.events
	"click #goButton": ->
		name = $("#changeNameInput").val().trim()
		description = $("#changeDescriptionInput").val().trim()
		deadline = $("#changeDeadlineInput").data("DateTimePicker").getDate().toDate()
		classId = Session.get("currentSelectedClassDatum")?._id ? currentProject().__class?._id

		Projects.update currentProject()._id, $set: { name, description, deadline, magisterId: currentProject().magisterId, classId }

		$("#addProjectModal").modal "hide"

	"click #leaveProjectButton": ->
		id = currentProject()._id
		Router.go "app"
		Projects.update id, $pull: participants: Meteor.userId()

Template.addParticipantModal.rendered = ->
	personsEngine.initialize()

	$("#personNameInput").typeahead(null,
		source: personsEngine.ttAdapter()
		displayKey: "fullName"
		templates:
			suggestion: (data) -> "<img class=\"lastChatSenderPicture\" src=\"#{gravatar data}\" width=\"50\" height=\"50\"><span class=\"personSuggestionName\"<b>#{data.fullName}</b>"
	).on "typeahead:selected", (obj, datum) -> Session.set "currentSelectedPersonDatum", datum

addUser = ->
	Projects.update currentProject()._id, $push: participants: Session.get("currentSelectedPersonDatum")._id
	$("#addParticipantModal").modal "hide"
	notify Locals["nl-NL"].ProjectPersonAddedNotice(Session.get("currentSelectedPersonDatum").profile.firstName), "notice"

Template.addParticipantModal.events
	"click #goButton": addUser
	"keydown #personNameInput": (event) -> addUser() if event.which is 13

Template.fileRow.events
	"click": (event) ->
		target = $(event.target)
		ripple = target.find(".ripple")

		ripple.removeClass "animate"

		unless ripple.height() or ripple.width()
			diameter = Math.max target.outerWidth(), target.outerHeight()
			ripple.css height: diameter, width: diameter

		x = event.pageX - target.offset().left - ripple.width() / 2
		y = event.pageY - target.offset().top - ripple.height() / 2

		ripple.css(top: "#{y}px", left: "#{x}px").addClass "animate"

Template.personRow.events
	"click": (event) -> Router.go "personView", @ unless $(event.target).hasClass "removePersonButton"

	"click .removePersonButton": ->
		alertModal "Zeker weten?", Locals["nl-NL"].ProjectPersonRemovalMessage(@profile.firstName), DialogButtons.OkCancel, { main: "Is de bedoeling", second: "heh!?" }, { main: "btn-danger" }, main: =>
			Projects.update currentProject()._id, $pull: participants: @_id
			notify Locals["nl-NL"].ProjectPersonRemovedNotice(@profile.firstName), "notice"