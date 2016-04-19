#Pill checkbox & radio buttons a little help
$('.js-options input').change ->
  type = $(@).attr('type')
  check = $(@).parent('label')
  if type is 'checkbox'
    check.toggleClass('checked')
  else if type is 'radio'
    check.siblings('label').removeClass('checked')
    check.addClass('checked')