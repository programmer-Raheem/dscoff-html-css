$(document).ready(function () {

  var ribbonSlider = $('.ribbon-slider');
  ribbonSlider.slick({
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  var gameModesSlider = $('.game-modes-slider');
  gameModesSlider.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '16px',
          variableWidth: true
        }
      }
    ]
  });

  var vehicleSliderOptions = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    arrows: false,
    dots: false,
    swipe: true,
    touchMove: true,
    pauseOnHover: true,
    pauseOnFocus: false
  };

  function refreshSliders() {
    if (ribbonSlider.hasClass('slick-initialized')) {
      ribbonSlider.slick('setPosition');
    }
    if (gameModesSlider.hasClass('slick-initialized')) {
      gameModesSlider.slick('setPosition');
    }
  }

  function toggleVehicleSlider() {
    var $slider = $('.vehicle-modes-wrapper .vehicles-row');

    if ($(window).width() <= 768) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick(vehicleSliderOptions);
      } else {
        $slider.slick('setPosition');
      }
    } else if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }

    refreshSliders();
  }

  toggleVehicleSlider();

  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(toggleVehicleSlider, 200);
  });

  $(window).on('load', function () {
    setTimeout(toggleVehicleSlider, 150);
  });

});
