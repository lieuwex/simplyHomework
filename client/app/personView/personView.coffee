status = ->
	s = Router.current().data().status
	if s.idle
		return backColor: "#FF9800", borderColor: "#E65100"
	else if s.online
		return backColor: "#4CAF50", borderColor: "#1B5E20"
	
	return backColor: "#EF5350", borderColor: "#B71C1C"

Template.personView.helpers
	backColor: -> status().backColor
	borderColor: -> status().borderColor