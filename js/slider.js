
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
      arrows: true,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
            },
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               arrows: false,
            },
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
});

