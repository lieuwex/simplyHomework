/* global Kadira, Grades, Projects, updateGrades, SyncedCron, Classes,
   GradeFunctions, Analytics */

import emails from 'meteor/emails'

// TODO: have a central place for the default options of notifications, just
// like the 'privacy' package has. Currently if we want to change the default of
// notifications options we have to do that on various places. Would be nice if
// it would just be one.

/**
 * @method sendEmail
 * @param {String} userId
 * @param {String} subject
 * @param {String} html
 */
function sendEmail (userId, subject, html) {
	Email.send({
		from: 'simplyHomework <hello@simplyApps.nl>',
		to: getUserField(userId, 'emails[0].address'),
		subject: `simplyHomework | ${subject}`,
		html,
	})
}

SyncedCron.add({
	name: 'Notify new grades',
	schedule: (parser) => parser.recur().on(3).hour(),
	job: function () {
		const toString = (g) => g.toString().replace('.', ',')

		const users = Meteor.users.find({
			'profile.firstName': { $ne: '' },
			'settings.notifications.email.newGrade': { $ne: false },
		}).fetch()

		users.forEach((user) => {
			const userId = user._id

			updateGrades(userId, false)

			const grades = Grades.find({
				ownerId: userId,
				isEnd: false,
				classId: { $exists: true },
				$and: [
					{ dateFilledIn: { $gte: Date.today().addDays(-1) }},
					// user probably has already seen the grade when he logged in on
					// simplyHomework, no need to send a mail.
					{ dateFilledIn: { $gt: user.status.lastLogin.date }},
				]
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
				const c = Classes.findOne(grade.classId)

				try {
					const html = Promise.await(emails.cijfer({
						className: c.name,
						classUrl: Meteor.absoluteUrl(`class/${c._id}`),
						grade: toString(grade),
						passed: grade.passed,
						average: toString(GradeFunctions.getEndGrade(c._id, userId)),
					}))
					sendEmail(userId, `Nieuw cijfer voor ${c.name}`, html)
					Analytics.insert({
						type: 'send-mail',
						date: new Date,
						emailType: 'grade',
					})
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

NoticeMails = {
	projects(projectId, addedUserId, adderUserId) {
		const setting = getUserField(
			addedUserId,
			'settings.notifications.email.joinedProject',
			true
		)
		if (!setting) {
			return
		}

		const project = Projects.findOne(projectId)
		const adder = Meteor.users.findOne(adderUserId)
		try {
			const html = Promise.await(emails.project({
				projectName: project.name,
				projectUrl: Meteor.absoluteUrl(`project/${projectId}`),
				personName: `${adder.profile.firstName} ${adder.profile.lastName}`,
			}))
			sendEmail(addedUserId, 'Toegevoegd aan project', html)
			Analytics.insert({
				type: 'send-mail',
				date: new Date,
				emailType: 'project',
			})
		} catch (err) {
			Kadira.trackError(
				'notices-emails',
				err.message,
				{ stacks: err.stack }
			)
		}
	}
}
