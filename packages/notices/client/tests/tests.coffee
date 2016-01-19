###*
# @method getTests
# @return {CalendarItem[]}
###
getTests = ->
	minuteTracker.depend()
	CalendarItems.find({
		'userIds': Meteor.userId()
		'content': $exists: yes
		'content.type': $in: [ 'test', 'exam', 'quiz', 'oral' ]
		'content.description': $exists: yes
		'startDate': $gt: new Date
		'scrapped': no
	}, {
		sort:
			startDate: 1
	}).fetch()

NoticeManager.provide 'tests', ->
	if getTests().length > 0
		template: 'tests'
		header: 'Aankomende toetsen'
		priority: 1

Template.tests.helpers
	tests: -> getTests()

Template.testItem.helpers
	relative: -> Helpers.formatDateRelative @startDate, no

Template.testItem.events
	'click': ->
		FlowRouter.go(
			'calendar'
			{ time: @startDate.date().getTime() }
			{ openCalendarItemId: @_id }
		)
