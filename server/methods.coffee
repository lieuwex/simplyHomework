request = Meteor.npmRequire "request"
Future = Npm.require "fibers/future"

Meteor.methods
	###*
	# Do a HTTP request.
	# @method http
	# @param method {String} The HTTP method to use.
	# @param url {String} The URL to send the HTTP request to.
	# @param options {Object} A request settings object.
	# @return {Object} { content: String, headers: Object }
	###
	http: (method, url, options = {}) ->
		@unblock()
		headers = _.extend (options.headers ? {}), "User-Agent": "simplyHomework"
		fut = new Future()

		opt = _.extend options, {
			method
			url
			headers
			jar: no
			body: options.data ? options.content
			json: options.data?
			encoding: if _.isUndefined(options.encoding) then "utf8" else options.encoding
		}

		request opt, (error, response, content) ->
			if error? then fut.throw error
			else fut.return { content, headers: response.headers }

		fut.wait()

	multipart: (destUrl, fromUrl, options = {}) ->
		@unblock()
		headers = _.extend (options.headers ? {}), "User-Agent": "simplyHomework"
		fut = new Future()

		request { method: "GET", url: fromUrl, encoding: null, headers }, (error, response, content) ->
			opt = _.extend options, {
				method: "POST"
				url: destUrl
				headers
				formData: file:
					value: content
					options:
						filename: options.fileName
						contentType: "application/octet-stream"
			}

			request opt, (error, response, content) ->
				if error? then fut.throw error
				else fut.return { content, headers: response.headers }

		fut.wait()

	log: (type, message, elements...) -> console[type] message, elements...

	###*
	# Check if the given magisterData is correct and if so,
	# insert it into the database.
	# @method setMagisterInfo
	# @param info {Object} The object containing the data.
	# @return {Boolean} Whether or not the given info is correct.
	###
	setMagisterInfo: (info) ->
		@unblock()
		fut = new Future()

		userId = @userId
		{ username, password } = info.magisterCredentials

		new Magister(info.school, username, password, no).ready (e) ->
			if e?
				fut.return no
				return

			url = @profileInfo().profilePicture(200, 200, yes)

			request.get { url, encoding: null, headers: cookie: @http._cookie }, Meteor.bindEnvironment (error, response, body) =>
				Meteor.users.update userId,
					$set:
						"magisterCredentials": info.magisterCredentials

						"profile.schoolId": info.schoolId
						"profile.magisterPicture": if body? then "data:image/jpg;base64,#{body.toString "base64"}" else ""
						"profile.birthDate": @profileInfo().birthDate()
						"profile.firstName": @profileInfo().firstName()
						"profile.lastName": @profileInfo().lastName()

						"gavePermission": yes

				fut.return yes

		fut.wait()

	###*
	# Resets magisterCredentials for the current user.
	# @method clearMagisterInfo
	###
	clearMagisterInfo: -> Meteor.users.update @userId, $set: magisterCredentials: null

	changeMail: (mail) ->
		Meteor.users.update @userId, $set: { "emails": [ { address: mail, verified: no } ] }
		Meteor.call "callMailVerification"

	###*
	# Verifies an mail adress and sets the gravatar, if present.
	#
	# @method callMailVerification
	# @param [adress] {String} The adress to verify, if this is omitted the first address of the current user (`this.userId`) will be used.
	###
	callMailVerification: (address) ->
		user = if address? then Meteor.users.findOne { "emails": $elemMatch: { address }} else Meteor.users.findOne @userId

		if user.emails[0].verified
			throw new Meteor.Error(400, "Mail already verified.")
		else
			Accounts.sendVerificationEmail user._id

			request.get { url: "https://www.gravatar.com/avatar/#{md5 user.emails[0].address}?d=identicon&d=404&s=1" }, Meteor.bindEnvironment (error, response) ->
				Meteor.users.update user._id, $set:
					gravatarUrl: "https://www.gravatar.com/avatar/#{md5 user.emails[0].address}?d=identicon&r=PG"
					hasGravatar: response.statusCode isnt 404

	###*
	# Checks if the given mail address exists in the database.
	# @method mailExists
	# @param mail {String} The address to check.
	# @return {Boolean} Whether or not the given address exists.
	###
	mailExists: (mail) ->
		@unblock()
		Meteor.users.find(
			emails: {
				$elemMatch: {
					address: mail
				}
			}
		).count() isnt 0

	###*
	# Removes the account of the current caller.
	# @method removeAccount
	# @param passHash {String} The password of the user SHA256 encrypted.
	###
	removeAccount: (passHash) ->
		check passHash, String
		unless @userId?
			throw new Meteor.Error "notLoggedIn", "User not logged in."

		user = Meteor.users.findOne @userId
		res = Accounts._checkPassword user,
			digest: passHash
			algorithm: "sha-256"

		if res.error?
			throw new Meteor.Error "wrongPassword", "Given password incorrect."

		Meteor.users.remove @userId
