import Swiper from 'swiper';

const cardSlider = new Swiper(".card-slider", {
  navigation: {
    nextEl: ".card-slider__arrow_next",
  },
  pagination: {
    el: ".section_make .tabs",
    clickable: true,
    bulletActiveClass: "tabs__item_active",
    renderBullet: function (index, className) {
      return `<li class="tabs__item swiper-pagination-bullet"><span data-tabs-item></span></д>`;
    },
  },
});
