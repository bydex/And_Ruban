import fullpage from '../../../js/index';
import sliders  from '../top-slider/top-slider';
import Swiper   from 'swiper';
import burger   from '../../components/hamburger/hamburger';

const btn = document.querySelector('#watch-original');

let windowWidth = window.innerWidth,
    isMobile = windowWidth < 767;
if (isMobile) {

}

const initWatchOriginal = () => {
    document.body.classList.add('watch-original');

    if (!isMobile) {
        fullpage.mousewheel.disable();
    }
    let indexBackSlider = sliders.backSlider.realIndex;
    sliders.backSlider.destroy(true, true);
    sliders.topSliderThumbs.destroy(true, true);

    let topSliderThumbs = new Swiper(".top-slider__slider", sliders.topSliderThumbsSettings);

    sliders.backSliderSettings.allowTouchMove   = true;
    sliders.backSliderSettings.effect           = false;
    sliders.backSliderSettings.thumbs.swiper    = topSliderThumbs;
    sliders.backSliderSettings.initialSlide     = indexBackSlider;


    const backSlider = new Swiper(".slider-background", sliders.backSliderSettings);
    backSlider.on("init slideChange resize", sliders.backSliderEvent);

    topSliderThumbs.init();
    backSlider.init();
    backSlider.update();
    if (isMobile) {
        const sliderOffsetTop = backSlider.wrapperEl.getBoundingClientRect().top,
            windowScroll = window.scrollY,
            windowHalfHeight = window.innerHeight / 2,
            backSliderHeight = backSlider.wrapperEl.offsetHeight / 2;
        const y = sliderOffsetTop + windowScroll - windowHalfHeight + backSliderHeight;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    sliders.backSlider              = backSlider;
    sliders.topSliderThumbs         = topSliderThumbs;
    sliders.backSlider.activeIndex  = backSlider.activeIndex;
},
destroyWatchOriginal = () => {
    document.body.classList.remove('watch-original');

    if (!isMobile) {
        fullpage.mousewheel.enable();
    }

    let indexBackSlider = sliders.backSlider.realIndex;
    sliders.backSlider.destroy(true, true);
    sliders.topSliderThumbs.destroy(true, true);

    let topSliderThumbs = new Swiper(".top-slider__slider", sliders.topSliderThumbsSettings);

    sliders.backSliderSettings.allowTouchMove   = false;
    sliders.backSliderSettings.effect           = 'fade';
    sliders.backSliderSettings.thumbs.swiper    = topSliderThumbs;
    sliders.backSliderSettings.initialSlide     = indexBackSlider;


    const backSlider = new Swiper(".slider-background", sliders.backSliderSettings);
    backSlider.on("init slideChange resize", sliders.backSliderEvent);

    topSliderThumbs.init();
    backSlider.init();
    backSlider.update();

    sliders.backSlider              = backSlider;
    sliders.topSliderThumbs         = topSliderThumbs;
    sliders.backSlider.activeIndex  = backSlider.activeIndex;
};

document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && document.body.classList.contains('watch-original')) {
        destroyWatchOriginal();
        burger.overlayClose(true);
        burger.hamburgerClose();
    }
})

btn && btn.addEventListener("click", function() {
    burger.overlayOpen(true);
    burger.hamburgerOpen();
    setTimeout(initWatchOriginal, 300);
});

const overlayOriginal = document.querySelector('.overlay_original');
overlayOriginal && overlayOriginal.addEventListener('click', function () {
    destroyWatchOriginal();
    burger.overlayClose(true);
    burger.hamburgerClose();
})


burger.hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.body.classList.contains('watch-original')) {
        destroyWatchOriginal();
        burger.overlayClose(true);
        burger.hamburgerClose();
    }
});


export default destroyWatchOriginal;
