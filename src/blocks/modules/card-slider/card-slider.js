import Swiper from 'swiper';

const cardThumbs = new Swiper("#make-card-thumb", {
  allowTouchMove: false,
});
const cardSlider = new Swiper("#make-card-slider", {
  navigation: {
    nextEl: "#make-card-slider .card-slider__arrow_next",
  },
  thumbs: {
    swiper: cardThumbs,
  },
  loop: true,
});
