#Scroll to element
$('.js-scroll').click (e) ->
  dest = $(@).attr('href')
  e.preventDefault()
  $('html, body').animate
    scrollTop: $(dest).offset().top
  , 1000