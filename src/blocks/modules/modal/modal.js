import Swiper from 'swiper';

const swiper = new Swiper('.modal', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
    speed: 2000,
});
