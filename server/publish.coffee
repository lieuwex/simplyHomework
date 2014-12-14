# PUSH ONLY FROM SAME SCHOOL <<<<

# Meteor.publish "usersData", ->
# 	unless @userId? and (callerSchoolId = Meteor.users.findOne(@userId).profile.schoolId)?
# 		@ready()
# 		return

# 	Meteor.users.find { "profile.schoolId": callerSchoolId }, fields:
# 		"status.online": 1
# 		"status.idle": 1
# 		profile: 1
# 		gravatarUrl: 1

# WARNING: PUSH ALL DATA
Meteor.publish "usersData", ->
	Meteor.users.find {}, fields:
		"status.online": 1
		"status.idle": 1
		profile: 1
		gravatarUrl: 1
		hasGravatar: 1

Meteor.publish "essentials", ->
	unless @userId?
		@ready()
		return
	classes = Classes.find()
	if (val = Meteor.users.findOne(@userId).profile.courseInfo)?
		{ year, schoolVariant } = val
		classes = Classes.find(schoolVariant: schoolVariant.toLowerCase(), year: year)

	userData = Meteor.users.find @userId, fields:
		classInfos: 1
		mailSignup: 1
		premiumInfo: 1
		magisterCredentials: 1
		schedular: 1
		hasMagisterSix: 1
		"status.online": 1
		"status.idle": 1
		gravatarUrl: 1
		hasGravatar: 1
		studyGuidesHashes: 1
		profile: 1

	[ Schools.find(), classes, userData, CalendarItems.find(ownerId: @userId) ]

Meteor.publish "goaledSchedules", -> GoaledSchedules.find { ownerId: @userId }
Meteor.publish "projects", -> Projects.find(participants: @userId)
Meteor.publish "betaPeople", -> BetaPeople.find {}, fields: hash: 1