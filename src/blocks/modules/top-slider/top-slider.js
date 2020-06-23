import Swiper from "swiper";
import helpers from "../../../js/import/components";

const rem = helpers.rem;


let topSliderThumbs = undefined;
// if (document.querySelector(".top-slider__slider")) {
    let topSliderThumbsSettings = {
        slidesPerView: 5,
        draggable: true,
        speed: 700,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    }
    topSliderThumbs = new Swiper(".top-slider__slider", topSliderThumbsSettings);
// }

// if (document.querySelector(".slider-background")) {

    let backSliderSettings = {
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
                return `<span class="${currentClass}"></span> ИЗ <span class="${totalClass}"></span> ФОТО`;
            },
        },
        navigation: {
            nextEl: ".top-slider__arrow_next",
            prevEl: ".top-slider__arrow_prev",
        },
        init: false
    }
    const backSlider = new Swiper(".slider-background", backSliderSettings);

    const backSliderEvent = () => {
        const slider    = document.querySelector(".top-slider__slider"),
            slideActive = slider.querySelector(".swiper-slide-thumb-active"),
            slideOffset = slideActive.swiperSlideOffset,
            slideBorder = slider.querySelector(".swiper-border"),
            slideHeight = slideActive.offsetHeight,
            slideWidth  = slideActive.offsetWidth;

        slideBorder.style.transform = `translateX(${rem(slideOffset)})`;
        slideBorder.style.height    = rem(slideHeight);
        slideBorder.style.width     = rem(slideWidth);
    }

    backSlider.on("init slideChange resize", backSliderEvent);


    backSlider.init();

// }

let sliders = {
    backSlider: backSlider,
    topSliderThumbs: topSliderThumbs,
    backSliderEvent: backSliderEvent,
    backSliderSettings: backSliderSettings,
    topSliderThumbsSettings: topSliderThumbsSettings
}

export default sliders;
