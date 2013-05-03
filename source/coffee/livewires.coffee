$ ->
	$('.reveal').click ->
		target = $(@).attr 'href'
		$(target).slideToggle('fast')
		false