/* global Kadira, Grades, Projects, updateGrades, SyncedCron, Classes,
   GradeFunctions */

// TODO: user settings for email notifications
const Future = Npm.require('fibers/future')
const emails = Npm.require('simplyemail')

const settingsUrl = Meteor.absoluteUrl('settings')

/**
 * @method sendEmail
 * @param {User} user
 * @param {String} subject
 * @param {String} html
 */
function sendEmail (user, subject, html) {
	Email.send({
		from: 'simplyHomework <hello@simplyApps.nl>',
		to: user.emails[0].address,
		subject: `simplyHomework | ${subject}`,
		html,
	})
}

/**
 * @function wrapPromise
 * @param {Promise} promise
 * @return {any}
 */
function wrapPromise (promise) {
	const fut = new Future()
	promise.then((r) => {
		fut.return(r)
	}).catch((e) => {
		fut.throw(e)
	})
	return fut.wait()
}

SyncedCron.add({
	name: 'Notify new grades',
	schedule: (parser) => parser.recur().on(3).hour(),
	job: function () {
		const users = Meteor.users.find({
			'profile.firstName': { $ne: '' },
		}).fetch()

		users.forEach((user) => {
			const userId = user._id

			updateGrades(userId, false)

			const grades = Grades.find({
				ownerId: userId,
				classId: { $exists: true },
				dateFilledIn: { $gte: Date.today().addDays(-1) },
			}, {
				fields: {
					_id: 1,
					classId: 1,
					dateFilledIn: 1,
					gradeStr: 1,
					passed: 1,
					ownerId: 1,
				},
			})

			grades.forEach((grade) => {
				if (user.status.lastLogin.date > grade.dateFilledIn) {
					// user probably has already seen the grade when he logged in on
					// simplyHomework, no need to send a mail.
					return
				}

				const c = Classes.findOne(grade.classId)

				try {
					const html = wrapPromise(emails.cijfer({
						className: c.name,
						classUrl: Meteor.absoluteUrl(`class/${c._id}`),
						grade: grade.gradeStr,
						passed: grade.passed,
						average: GradeFunctions.getEndGrade(c._id, userId),
						settingsUrl,
					}))
					sendEmail(user, `Nieuw cijfer voor ${c.name}`, html)
				} catch (err) {
					Kadira.trackError(
						'notices-emails',
						err.message,
						{ stacks: err.stack }
					)
				}
			})
		})
	},
})

Meteor.startup(function () {
	let startingObservers = true

	Projects.find({
		participants: { $ne: [] },
	}, {
		fields: {
			_id: 1,
			participants: 1,
			name: 1,
		},
	}).observe({
		changed(newDoc, oldDoc) {
			if (startingObservers) {
				return
			}

			const oldParticipants = oldDoc.participants
			const newParticipants = newDoc.participants
			const addedParticipants = _.difference(newParticipants, oldParticipants)

			addedParticipants.forEach((userId) => {
				const user = Meteor.users.findOne(userId)

				try {
					const html = wrapPromise(emails.project({
						projectName: newDoc.name,
						projectUrl: Meteor.absoluteUrl(`project/${newDoc._id}`),
						personName: `${user.profile.firstName} ${user.profile.lastName}`,
						settingsUrl,
					}))
					sendEmail(user, 'Toegevoegd aan project', html)
				} catch (err) {
					Kadira.trackError(
						'notices-emails',
						err.message,
						{ stacks: err.stack }
					)
				}
			})
		},
	})

	startingObservers = false
})
