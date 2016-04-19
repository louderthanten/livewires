function offcanvas() {
  $('.js-open-canvas').click(function(e) {
    var target, targetName;
    target = $(this).find('a').attr('href');
    targetName = target.substring(4);
    $(this).toggleClass('active');
    $(target).toggleClass('offcanvas--open');
    if ($(target).hasClass('offcanvas--left')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-left');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-left');
    } else if ($(target).hasClass('offcanvas--right')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-right');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-right');
    }
    e.preventDefault();
  });
}
