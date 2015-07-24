# Toggle hidden drawers
$(document).on 'click', '.js-reveal', (e) ->
  target = $(@).attr 'href'
  $(target).toggleClass 'opened'
  e.preventDefault()