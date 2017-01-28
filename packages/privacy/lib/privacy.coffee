###*
# @property options
# @type Object[]
###
export options = [{
		description: 'Anderen toestaan je rooster te bekijken.'
		short: 'publishCalendarItems'
		defaultValue: yes
	}, {
		description: 'Anderen toestaan je status te zien.'
		short: 'publishStatus'
		defaultValue: yes
}]

###*
# Gets the privacy options for the given `user`, with default values if an
# option hasn't been set yet.
#
# @method getOptions
# @param {String|object} userId The ID of the user to get the privacy options
# of, or the user object itself.
# @return {Object}
###
export getOptions = (userId) ->
	userOptions = (
		if _.isPlainObject userId
			userId
		else
			Meteor.users.findOne(
				{ _id: userId }
				{ fields: 'settings.privacy': 1 }
			)
	)?.settings?.privacy ? {}

	defaults = _.chain(options)
		.map (obj) -> [ obj.short, obj.defaultValue ]
		.object()
		.value()

	_.defaults userOptions, defaults
