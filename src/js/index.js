import Swiper from "swiper";
import "./import/modules";
import "./import/components";
import helpers from "./import/components";

const rem = helpers.rem;
console.log(rem);


let fullpage = new Swiper("#fullpage", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".fullpage__pagination",
        clickable: true,
    },
    // draggable: false,
    // allowTouchMove:false,
    speed: 1000,
    navigation: {
        nextEl: ".fullpage__arrow_down",
        prevEl: ".fullpage__arrow_up",
    },
    init: false,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2
    }
});


fullpage.on("init", function() {
    if (this.slides.length <= 1) {
        document.querySelector("#fullpage").classList.add("fullpage_disabled");
    }
    Array.from(this.slides).forEach((el, i) => {
        el.dataset.slideIndex = i;
    })
});
fullpage.on("init slideChange", function() {
    let index   = this.realIndex,
        isEven  = index % 2,
        slider  = document.querySelector("#fullpage");


    if (!isEven) {
        slider.classList.add("fullpage_theme_light");
    } else {
        slider.classList.remove("fullpage_theme_light");
    }
});

fullpage.init();


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
              anchorSlide   = document.querySelector(`#${slideId}`),
              slideIndex    = anchorSlide.dataset.slideIndex;

        setTimeout(() => {
            fullpage.slideTo(slideIndex);
        }, slideTimeout || 0)
    })
})


export default fullpage;
