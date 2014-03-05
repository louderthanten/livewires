# Placeholder JS
#==========================
$('[placeholder]').each ->
  if $(this).val() is ''
    hint = $(this).attr('placeholder')
    $(this).val(hint).addClass 'hint'

$('[placeholder]').focus(->
  $(this).val('').removeClass 'hint'  if $(this).val() is $(this).attr('placeholder')
).blur ->
  $(this).val($(this).attr('placeholder')).addClass 'hint'  if $(this).val() is ''