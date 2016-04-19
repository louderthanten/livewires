function scroll() {
    $('.js-scroll').click(function(e) {
    var dest;
    dest = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  });
};
