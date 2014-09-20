root = @

###*
# Class to repesent a book / 'methode'
# 
# @class Book
###
class @Book
	###*
	# Constructor of the Book class.
	# 
	# @method constructor 
	# @param _parent {Object} The creator of this object.
	# @param _title {String} The title of the book.
	# @param _publisher {String} The publisher of the book.
	# @param _woordjesLerenBookId {Number} The ID used on Woordjesleren.nl
	# @param _release {Number} The 'version' of the book.
	###
	constructor: (@_parent, @_title, @_publisher, @_woordjesLerenBookId, @_release) ->
		@_className = "Book"
		@_id = new Meteor.Collection.ObjectID()

		@_utils = [] # utils by ID
		@_chapters = []

		@title = root.getset "_title", String
		@publisher = root.getset "_publisher", Match.Optional String
		@woordjesLerenBookId = root.getset "_woordjesLerenBookId", Number
		@release = root.getset "_release", Match.Optional Number
		@chapters = root.getset "_chapters", [root.Chapter._match], no

		@addChapter = root.add "_chapters", "Chapter"
		@removeChapter = root.remove "_chapters", "Chapter"

	class: -> @_parent