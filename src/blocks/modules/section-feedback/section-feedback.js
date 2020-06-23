import Swiper from 'swiper';
import setUnderline from '../tabs/tabs';

const thumbsSlider = new Swiper('.section_and-ruban .swiper-container.tabs', {
    loop: false,
    allowTouchMove: false,
});

const mainSlider = new Swiper('.section_and-ruban .swiper-container.tab-content', {
    loop: true,
    thumbs: {
        swiper: thumbsSlider,
    },
});
mainSlider.on("slideChange", function () {
    const tabs        = thumbsSlider.wrapperEl,
          underline   = tabs.querySelector('.tabs__underline'),
          active      = tabs.querySelector('.swiper-slide-thumb-active [data-tabs-item]');

    setUnderline(active, underline);
});
