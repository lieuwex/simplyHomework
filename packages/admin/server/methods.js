/* global userIsInRole */
import { sendHtmlMail } from 'meteor/emails'

Meteor.methods({
	/**
	 * @method sendMail
	 * @param {String} title
	 * @param {String} body
	 * @param {Object} [userQuery={}]
	 * @return {String[]} An array containing all the userIds where this email
	 * has been sent to.
	 */
	sendMail (title, body, userQuery = {}) {
		check(title, String)
		check(body, String)
		check(userQuery, Object)

		if (this.userId == null || !userIsInRole(this.userId, 'admin')) {
			throw new Meteor.Error('not-privileged')
		}

		const users = Meteor.users.find(userQuery).fetch()

		for (const u of users) {
			sendHtmlMail(u, title, body)
		}

		return users.map(u => u._id)
	},
})
