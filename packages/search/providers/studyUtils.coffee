Search.provide 'studyUtil files', ({ user, classIds, mimes }) ->
	studyUtils = StudyUtils.find({
		userIds: user._id
		classId: (
			if classIds.length > 0 then { $in: classIds }
			else { $nin: classIds } # match all classes
		)
		fileIds: $ne: []
	}, {
		fields:
			classId: 1
			userIds: 1
			fileIds: 1
	}).fetch()

	getFiles(
		_(studyUtils)
			.pluck 'fileIds'
			.flatten()
			.value()
		mimes
	)
