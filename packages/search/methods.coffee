SearchAnalytics = new Mongo.Collection 'searchAnalytics'
Meteor.methods
	###*
	# Searches for the given query on as many shit as possible.
	#
	# @method search
	# @param {String} query
	# @param {Object} [options]
	# 	@param {String[]} [classIds]
	# @return {Object[]}
	###
	search: (query, options = {}) ->
		check query, String
		check options, Object
		@unblock()
		Search.search @userId,
			query: query
			classIds: options.classIds

	'search.analytics.store': (query, choosenId) ->
		@unblock()
		check query, String
		check choosenId, Match.Any

		res = Meteor.call 'search', query
		choosenIndex = _.findIndex res, (x) -> EJSON.equals x._id, choosenId
		res = _.pluck res, 'title'

		SearchAnalytics.insert
			date: new Date
			query: query
			results: res
			choosenIndex: choosenIndex

		undefined
