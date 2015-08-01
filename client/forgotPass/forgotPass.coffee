Template.forgotPass.events
	"keydown": (event) ->
		mail = event.target.value.toLowerCase()
		if event.which isnt 13
			$("#forgotPassMailInput").tooltip "destroy"
			return

		Meteor.call "mailExists", mail, (err, result) ->
			if result
				swalert title: "Mail verstuurd", text: "Je krijgt zometeen een mailtje waarmee je je wachtwoord kan veranderen.", type: "success"
				Accounts.forgotPassword(email: mail)
			else if err?
				Kadira.trackError "forgotPass-client", err.message, stacks: EJSON.stringify err
				swalert title: "Fout", text: "Onbekende fout, we zijn op de hoogte gesteld", type: "error"
			else
				setFieldError "#forgotPassMailInput", "We hebben geen account met deze email gevonden."

Template.resetPass.events
	"keydown": ->
		return if event.which isnt 13

		Accounts.resetPassword Router.current().params.token, event.target.value, (err) ->
			if err?
				if err.reason is "Token expired"
					swalert title: "Reeds gebruikt", html: 'Wachtwoord is al een keer veranderd met deze link. Klik <a href="/forgot">hier</a> als je je wachtwoord nog een keer wilt wijzingen.', type: "error"
				else
					Kadira.trackError "resetPass-client", err.message, stacks: EJSON.stringify err
					swalert title: "Fout", text: "Onbekende fout, we zijn op de hoogte gesteld", type: "error"
			else
				Router.go "app"
				swalert title: "yay", text: "Wachtwoord is aangepast. Denk ik... Naja, laten we zeggen van wel. (Ik zou het toch maar even proberen)", type: "success"

Template.resetPass.rendered = -> $("#hintText").velocity { opacity: 1 }, 15000
