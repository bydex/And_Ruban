// IF INTENRNET EXPLORER
// import 'nodelist-foreach-polyfill';
// import 'element-closest-polyfill';
// import 'core-js/es/array/from';
import Swiper from "swiper";
import "./import/modules";
import "./import/components";
import helpers from "./import/components";

const rem = helpers.rem;
console.log(rem);


let fullpageSettings = {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    allowTouchMove: false,
    pagination: {
        el: ".fullpage__pagination",
        clickable: true,
    },
    speed: 1000,
    navigation: {
        nextEl: ".fullpage__arrow_down",
        prevEl: ".fullpage__arrow_up",
    },
    init: false,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2
    },
    observerUpdate: true
}

let windowWidth     = window.innerWidth,
    isMobile        = windowWidth < 767;
if (isMobile) {
    fullpageSettings.slidesPerView  = 'auto';
    fullpageSettings.freeMode       = true;
    fullpageSettings.allowTouchMove = true;
}

let fullpage = new Swiper("#fullpage", fullpageSettings);


fullpage.on("init", function() {
    if (this.slides.length <= 1) {
        document.querySelector("#fullpage").classList.add("fullpage_disabled");
    }
    Array.from(this.slides).forEach((el, i) => {
        el.dataset.slideIndex = i;
    })
});
fullpage.on("init slideChange", function() {
    let index   = this.activeIndex,
        isEven  = index % 2,
        slider  = document.querySelector("#fullpage"),
        active  = Array.from(fullpage.slides)[index],
        theme   = active.dataset.theme;

    if (theme !== 'light') {
        slider.classList.add("fullpage_theme_light");
    } else {
        slider.classList.remove("fullpage_theme_light");
    }
});

if (!isMobile) {
    fullpage.init();
    setTimeout(() => {
        fullpage.update();
    }, 50);
    window.addEventListener('resize orientationchange', () => {
        fullpage.update();
        setTimeout(() => {
            fullpage.update();
        }, 5);
    });
}



if (!isMobile) {
    const backgrounds = document.querySelectorAll(".section__bg");

    const getPos = (e) => ({
        x: e.clientX,
        y: e.clientY,
    });

    document.body.addEventListener("mousemove", (e) => {
        const mousePos = getPos(e);

        backgrounds.forEach((el) => {
            const blockConfig = el.getBoundingClientRect();
            if (
                mousePos.x > blockConfig.x &&
                mousePos.x < blockConfig.x + blockConfig.width &&
                mousePos.y > blockConfig.y &&
                mousePos.y < blockConfig.y + blockConfig.height
            ) {
                el.closest(".section").classList.add("section_bg_colored");
            } else {
                el.closest(".section").classList.remove("section_bg_colored");
            }
        });
    });
}


function setCSSWindowHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setCSSWindowHeight();
window.addEventListener('resize', setCSSWindowHeight);



const buttons = document.querySelectorAll('[data-anchor]');

buttons.forEach((el) => {
    el.addEventListener('click', function() {
        const slideId       = this.dataset.anchor,
            slideTimeout  = +this.dataset.anchorTimeout,
            anchorSlide   = document.querySelector(`#${slideId}`) || false;

        if (anchorSlide === false) location.href = `/#${slideId}`;

        const slideIndex    = anchorSlide.dataset.slideIndex,
            slideOffset   = anchorSlide.getBoundingClientRect().top + window.scrollY;


        setTimeout(() => {
            if (isMobile) {
                window.scroll({
                    top: slideOffset,
                    behavior: 'smooth'
                });
            } else {
                fullpage.slideTo(slideIndex);
            }
        }, slideTimeout || 0)
    })
})


export default fullpage;
