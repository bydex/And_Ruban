import fullpage from '../../../js/index';
import sliders  from '../top-slider/top-slider';
import Swiper   from 'swiper';
import burger   from '../../components/hamburger/hamburger';

const btn = document.querySelector('#watch-original');


const initWatchOriginal = () => {
    document.body.classList.add('watch-original');

    // fullpage.allowTouchMove = false;
    fullpage.mousewheel.disable();

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


    backSlider.init();
    backSlider.update();

    sliders.backSlider              = backSlider;
    sliders.topSliderThumbs         = topSliderThumbs;
    sliders.backSlider.activeIndex  = backSlider.activeIndex;
},
destroyWatchOriginal = () => {
    document.body.classList.remove('watch-original');

    // fullpage.allowTouchMove = true;
    fullpage.mousewheel.enable();

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

btn.addEventListener("click", function() {
    burger.overlayOpen(true);
    burger.hamburgerOpen();
    setTimeout(initWatchOriginal, 300);
});


burger.hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.body.classList.contains('watch-original')) {
        destroyWatchOriginal();
        burger.overlayClose(true);
        burger.hamburgerClose();
    }
});


export default destroyWatchOriginal;
