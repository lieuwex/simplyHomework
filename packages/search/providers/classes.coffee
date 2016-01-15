Search.provide 'classes', ({ user }) ->
	if classIds? then []
	else
		classInfos = getClassInfos user._id
		Classes.find({
			_id: $in: (
				_(classInfos)
					.reject 'hidden'
					.pluck 'id'
					.value()
			)
		}, {
			fields:
				name: 1

			transform: (c) -> _.extend c,
				type: 'class'
				title: c.name
		}).fetch()
