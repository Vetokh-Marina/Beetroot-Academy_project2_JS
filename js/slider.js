
$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1500,
      slideToShow: 1,
      swipe: true,
   });
});

$(document).ready(function () {
   $('.slider-news').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      dots: true,
      speed: 1500,
      swipe: true,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
            },
            breakpoint: 920,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
});

