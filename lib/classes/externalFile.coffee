###*
# File from a external service, such as Magister.
#
# @class ExternalFile
# @constructor
# @param name {String} The name of the file
###
class @ExternalFile
	constructor: (@name) ->
		@_id = new Mongo.ObjectID().toHexString()

		###*
		# The MIME type of the file.
		# @property mime
		# @type String
		# @default null
		###
		@mime = null

		###*
		# The date of creation of the file.
		#
		# @property creationDate
		# @type Date
		# @default null
		###
		@creationDate = null

		###*
		# The size of the current file in bytes.
		# @property size
		# @type Number
		# @default null
		###
		@size = null

		###*
		# @property fetchedBy
		# @type String|undefined
		# @default undefined
		###
		@fetchedBy = undefined

		###*
		# @property externalId
		# @type mixed
		# @default undefined
		###
		@externalId = undefined

		###*
		# The info needed to download the current file.
		# @property downloadInfo
		# @type Object
		# @default null
		###
		@downloadInfo = null

	url: -> Meteor.absoluteUrl "f/#{@_id}"

	buildAnchorTag: ->
		if Meteor.isClient
			a = document.createElement 'a'
			a.href = @url()
			a.textContent = @name

			if 'download' of a
				a.download = @name
			else
				a.target = '_blank'

			a

	@schema: new SimpleSchema
		_id:
			type: String
		name:
			type: String
		mime:
			type: String
		creationDate:
			type: Date
			optional: yes
		size:
			type: Number
		fetchedBy:
			type: String
			optional: yes
		externalId:
			type: null
			optional: yes
		downloadInfo:
			type: Object
			blackbox: yes

@Files = new Mongo.Collection 'files', transform: (f) -> _.extend new ExternalFile, f
@Files.attachSchema ExternalFile.schema

@FileDownloadCounters = new Mongo.Collection 'fileDownloadCounters'
