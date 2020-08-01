import Swiper from 'swiper';
import cardMethods from '../tabs/tabs';

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
        underline = tabs.querySelector('.tabs__underline'),
        active = tabs.querySelector('.swiper-slide-thumb-active [data-tabs-item]');

    cardMethods.setUnderline(active, underline);
    setTimeout(cardMethods.setTabTitle, 0, tabs.closest('.tabs'));

    Array.from(active.parentNode.parentNode.children).forEach((elchild) => {
        if (elchild.classList.contains("tabs__item_active")) {
            elchild.classList.remove("tabs__item_active");
        }
    });
    active.parentNode.classList.add("tabs__item_active");
});
