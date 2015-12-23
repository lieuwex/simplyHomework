###*
# Enum that contains all the days of a week. Zero based.
#
# @property DayEnum
###
@DayEnum =
	monday: 0
	tuesday: 1
	wednesday: 2
	thursday: 3
	friday: 4
	saturday: 5
	sunday: 6

@dutchDays = [
	'maandag'
	'dinsdag'
	'woensdag'
	'donderdag'
	'vrijdag'
	'zaterdag'
	'zondag'
]

@DayToDutch = (day) ->
	unless day?
		minuteTracker?.depend()
		day = Helpers.currentDay()

	dutchDays[day]

@DateToDutch = (date, includeYear = yes) ->
	unless date?
		minuteTracker?.depend()
		date = new Date

	month = switch date.getMonth()
		when 0 then 'januari'
		when 1 then 'februari'
		when 2 then 'maart'
		when 3 then 'april'
		when 4 then 'mei'
		when 5 then 'juni'
		when 6 then 'juli'
		when 7 then 'augustus'
		when 8 then 'september'
		when 9 then 'oktober'
		when 10 then 'november'
		when 11 then 'december'

	if includeYear then "#{date.getDate()} #{month} #{date.getFullYear()}"
	else "#{date.getDate()} #{month}"

@TimeGreeting = (date) ->
	unless date?
		minuteTracker?.depend()
		date = new Date

	hour = date.getHours()
	if 0 <= hour < 6 then 'Goedenacht'
	else if 6 <= hour < 12 then 'Goedemorgen'
	else if 12 <= hour < 18 then 'Goedemiddag'
	else if 18 <= hour < 24 then 'Goedenavond'
