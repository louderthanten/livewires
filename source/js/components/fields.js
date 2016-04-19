function fields() {
  $('.js-options input').change(function() {
    var check, type;
    type = $(this).attr('type');
    check = $(this).parent('label');
    if (type === 'checkbox') {
      check.toggleClass('checked');
    } else if (type === 'radio') {
      check.siblings('label').removeClass('checked');
      check.addClass('checked');
    }
  });
};
