import Swiper from 'swiper';
import helpers from "../../../js/import/components";

const rem = helpers.rem;


let topSliderThumbs = new Swiper(".top-slider__slider", {
  slidesPerView: 5,
  draggable: true,
  speed: 700,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});


const backSlider = new Swiper(".slider-background", {
  slidesPerView: 1,
  draggable: false,
  allowTouchMove: false,
  speed: 700,
  effect: "fade",
  loop: true,
  thumbs: {
    swiper: topSliderThumbs,
  },
  pagination: {
    el: ".top-slider__pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' ИЗ ' +
                '<span class="' + totalClass + '"></span> ФОТО';
    },
  },
  navigation: {
    nextEl: ".top-slider__arrow_next",
    prevEl: ".top-slider__arrow_prev",
  },
  init: false
});


backSlider.on("init slideChange resize", function () {
  const slider      = document.querySelector(".top-slider__slider"),
        slideActive = slider.querySelector('.swiper-slide-thumb-active'),
        slideOffset = slideActive.swiperSlideOffset,
        slideBorder = slider.querySelector('.swiper-border'),
        slideHeight = slideActive.offsetHeight,
        slideWidth  = slideActive.offsetWidth;

  slideBorder.style.transform = `translateX(${rem(slideOffset)})`;
  slideBorder.style.height    = rem(slideHeight);
  slideBorder.style.width     = rem(slideWidth);
});


backSlider.init();
