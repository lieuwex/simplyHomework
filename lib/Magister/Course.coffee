###*
# A Class (ex. English class)
#
# @class Class
# @private
# @constructor
# @param _magisterObj {Magister} A Magister object this Class is child of.
###
class @Class
	constructor: (@_magisterObj) ->
		###*
		# @property id
		# @final
		# @type Number
		###
		@id = _getset "_id"
		###*
		# @property beginDate
		# @final
		# @type Date
		###
		@beginDate = _getset "_beginDate"
		###*
		# @property endDate
		# @final
		# @type Date
		###
		@endDate = _getset "_endDate"
		###*
		# @property abbreviation
		# @final
		# @type String
		###
		@abbreviation = _getset "_abbreviation"
		###*
		# @property description
		# @final
		# @type String
		###
		@description = _getset "_description"
		###*
		# @property number
		# @final
		# @type Number
		###
		@number = _getset "_number"
		###*
		# @property teacher
		# @final
		# @type Person
		###
		@teacher = _getset "_teacher"
		###*
		# @property classExemption
		# @final
		# @type Boolean
		###
		@classExemption = _getset "_classExemption"

	@_convertRaw: (magisterObj, raw) ->
		obj = new Class magisterObj

		obj._id = raw.id
		obj._beginDate = new Date Date.parse raw.begindatum
		obj._endDate = new Date Date.parse raw.einddatum
		obj._abbreviation = raw.afkorting
		obj._description = raw.omschrijving
		obj._number = raw.volgnr
		obj._teacher = Person._convertRaw magisterObj, Docentcode: raw.docent
		obj._classExemption = raw.VakDispensatie or raw.VakVrijstelling

		return obj

###*
# A Course (like: 4 VWO E/M 14-15).
#
# @class Course
# @private
# @param _magisterObj {Magister} A Magister object this Course is child of.
# @constructor
###
class @Course
	constructor: (@_magisterObj) ->
		###*
		# @property id
		# @final
		# @type Number
		###
		@id = _getset "_id"
		###*
		# @property begin
		# @final
		# @type Date
		###
		@begin = _getset "_begin"
		###*
		# @property end
		# @final
		# @type Date
		###
		@end = _getset "_end"
		###*
		# The 'school period' of this Course (e.g: "1415").
		# @property schoolPeriod
		# @final
		# @type String
		###
		@schoolPeriod = _getset "_schoolPeriod"
		###*
		# Type of this Course (e.g: { description: "VWO 4", id: 420 }).
		# @property type
		# @final
		# @type Object
		###
		@type = _getset "_type"
		###*
		# The group of this Course contains the class the user belongs to (e.g: { description: "Klas 4v3", id: 420, locationId: 0 }).
		# @property group
		# @final
		# @type Object
		###
		@group = _getset "_group"
		###*
		# The 'profile' of this Course (e.g: "A-EM").
		# @property profile
		# @final
		# @type String
		###
		@profile = _getset "_profile"
		###*
		# An alternative profile, if it exists (e.g: "A-EM").
		# @property alternativeProfile
		# @final
		# @type String
		###
		@alternativeProfile = _getset "_alternativeProfile"

	###*
	# Gets the classes of this Course.
	#
	# @method classes
	# @async
	# @param callback {Function} A standard callback.
	# 	@param [callback.error] {Object} The error, if it exists.
	# 	@param [callback.result] {Class[]} An array containing the Classes.
	###
	classes: (callback) ->
		@_magisterObj.http.get @_classesUrl, {}, (error, result) =>
			if error?
				callback error, null
			else
				callback null, (Class._convertRaw @_magisterObj, c for c in EJSON.parse(result.content))

	###*
	# Gets the grades of this Course.
	#
	# @method grades
	# @async
	# @param [download=true] {Boolean} Whether or not to download the users from the server.
	# @param callback {Function} A standard callback.
	# 	@param [callback.error] {Object} The error, if it exists.
	# 	@param [callback.result] {Grade[]} An array containing the Grades.
	###
	grades: ->
		download = _.find(arguments, (a) -> _.isBoolean a) ? yes
		callback = _.find(arguments, (a) -> _.isFunction a)
		throw new Error "Callback can't be null" unless callback?

		@_magisterObj.http.get @_gradesUrl, {}, (error, result) =>
			if error?
				callback error, null
			else
				result = EJSON.parse(result.content).Items
				pushResult = _helpers.asyncResultWaiter result.length, (r) ->
					for c in _.uniq(r, (g) -> g.class().id()).map((g) -> g.class())
						for g in _.filter(r, (g) -> g.class().id() is c.id())
							g._class = c

					callback null, r

				for g in result
					do (g) =>
						g.teacher = Person._convertRaw @_magisterObj, Docentcode: g.Docent
						g.teacher._type = 3

						@_magisterObj.http.get @_columnUrl + g.CijferKolom.Id, {}, (error, result) =>
							g = Grade._convertRaw @_magisterObj, g, @_gradesUrlPrefix

							if error?
								callback error, null
							else
								result = EJSON.parse(result.content)
								g._description = result.WerkInformatieOmschrijving

								g._type._level = result.KolomNiveau
								g._type._description = result.KolomOmschrijving
								g._type._weight = result.Weging

								if download
									@_magisterObj.getPersons g.Docent, 3, (e, r) ->
										unless e? or !r[0]? then g._teacher = r[0]
										pushResult g
								else pushResult g


	@_convertRaw: (magisterObj, raw) ->
		obj = new Course magisterObj

		obj._classesUrl = magisterObj.magisterSchool.url + _.find(raw.Links, Rel: "Vakken").Href

		obj._gradesUrlPrefix = magisterObj._personUrl + "/aanmeldingen/#{raw.Id}/cijfers"
		obj._gradesUrl = obj._gradesUrlPrefix + "/cijferoverzichtvooraanmelding?actievePerioden=false&alleenBerekendeKolommen=false&alleenPTAKolommen=false"
		obj._columnUrl = obj._gradesUrlPrefix + "/extracijferkolominfo/"

		obj._id = raw.Id
		obj._begin = new Date Date.parse raw.Start
		obj._end = new Date Date.parse raw.Einde
		obj._schoolPeriod = raw.Lesperiode
		obj._type = { id: raw.Studie.Id, description: raw.Studie.Omschrijving }
		obj._group = { id: raw.Groep.Id, description: raw.Groep.Omschrijving, locationId: raw.Groep.LocatieId }
		obj._profile = raw.Profiel
		obj._alternativeProfile = raw.Profiel2

		return obj
