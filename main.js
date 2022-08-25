$(window).on('load resize', function() {
    if ($(window).width() < 769) {
        $('.bikes__slider:not(.slick-initialized)').slick({
          centerMode: true,
          dots: true,
          infinite: true,
          speed: 100,
          arrows: false,
          variableWidth: true
        });
      } else {
        $(".bikes__slider.slick-initialized").slick("unslick");
      }      
})