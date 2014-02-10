#Show/hide password fields
$('.js-show-pw').click (e) ->
  type = $(@).parents('.field').find('input')
  if $(type).attr('type') is 'text'
    $(type).get(0).type = 'password'
    $(@).text 'Show password'
  else
    $(type).get(0).type = 'text'
    $(@).text 'Hide password'
  e.preventDefault()

#Pill checkbox & radio buttons a little help
$('.js-options input').change ->
  type = $(@).attr('type')
  check = $(@).parent('label')
  if type is 'checkbox'
    check.toggleClass('checked')
  else if type is 'radio'
    check.siblings('label').removeClass('checked')
    check.addClass('checked')