# Toggle offcanvas menu classes
$('.js-open-canvas').click (e) ->
  target = $(@).find('a').attr('href')
  targetName = target.substring(4)
  $(@).toggleClass('active')
  $(target).toggleClass('offcanvas--open')
  $('body').toggleClass('offcanvas--push-' + targetName)
  e.preventDefault()