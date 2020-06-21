import fullpage from '../../../js/index';
import sliders  from '../top-slider/top-slider';
import Swiper   from 'swiper';
import helpers  from "../../../js/import/components";

const rem = helpers.rem;
const btn = document.querySelector('#watch-original');


const initWatchOriginal = () => {
    document.body.classList.add('watch-original');

    fullpage.allowTouchMove = false;
    fullpage.mousewheel.disable();

    let indexBackSlider = sliders.backSlider.activeIndex;
    sliders.backSlider.destroy();
    sliders.topSliderThumbs.destroy();

    let topSliderThumbs = new Swiper(".top-slider__slider", sliders.topSliderThumbsSettings);

    sliders.backSliderSettings.allowTouchMove   = true;
    sliders.backSliderSettings.effect           = false;
    sliders.backSliderSettings.thumbs.swiper    = topSliderThumbs;


    const backSlider = new Swiper(".slider-background", sliders.backSliderSettings);
    backSlider.on("init slideChange resize", sliders.backSliderEvent);


    backSlider.init();
    backSlider.slideTo(indexBackSlider, false, false);
    backSlider.update();

    sliders.backSlider = backSlider;
    sliders.topSliderThumbs = topSliderThumbs;
    sliders.backSlider.activeIndex = backSlider.activeIndex;
},
destroyWatchOriginal = () => {
    document.body.classList.remove('watch-original');

    fullpage.allowTouchMove = true;
    fullpage.mousewheel.enable();

    let indexBackSlider = sliders.backSlider.activeIndex;
    sliders.backSlider.destroy(true, true);
    sliders.topSliderThumbs.destroy(true, true);

    let topSliderThumbs = new Swiper(".top-slider__slider", sliders.topSliderThumbsSettings);

    sliders.backSliderSettings.allowTouchMove   = false;
    sliders.backSliderSettings.effect           = 'fade';
    sliders.backSliderSettings.thumbs.swiper    = topSliderThumbs;


    const backSlider = new Swiper(".slider-background", sliders.backSliderSettings);
    backSlider.on("init slideChange resize", sliders.backSliderEvent);


    backSlider.init();
    backSlider.slideTo(indexBackSlider, false, false);
    backSlider.update();

    sliders.backSlider = backSlider;
    sliders.topSliderThumbs = topSliderThumbs;
    sliders.backSlider.activeIndex = backSlider.activeIndex;
};

document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        destroyWatchOriginal();
    }
})

btn.addEventListener("click", initWatchOriginal);
