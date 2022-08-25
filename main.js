$(window).on('load resize', function() {
    if ($(window).width() < 769) {
        $('.bikes__slider:not(.slick-initialized)').slick({
          dots: true,
          infinite: true,
          speed: 100,
          arrows: false
        });
      } else {
        $(".bikes__slider.slick-initialized").slick("unslick");
      }      
})