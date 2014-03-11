# Toggle offcanvas menu classes
$('.js-open-canvas').click (e) ->
  target = $(@).find('a').attr 'href'
  targetName = target.substring(4)
  $(@).toggleClass 'active'
  $(target).toggleClass 'offcanvas--open'

  # Determine how content should react based on body class
  if $(target).hasClass 'offcanvas--left'
    # Push content left
    $('.offcanvas--push').toggleClass 'offcanvas--push-left'
    # OR squish content left
    $('.offcanvas--squish').toggleClass 'offcanvas--squish-left'

  else if $(target).hasClass 'offcanvas--right'
    # Push content right
    $('.offcanvas--push').toggleClass 'offcanvas--push-right'
    # OR squish content right
    $('.offcanvas--squish').toggleClass 'offcanvas--squish-right'
  e.preventDefault()