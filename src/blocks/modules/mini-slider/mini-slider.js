import Swiper from "swiper";


new Swiper(".mini-slider", {
    slidesPerView: 1,
    draggable: true,
    speed: 1000,
    pagination: {
        el: ".mini-slider__pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return "<span class=\"" + currentClass + "\"></span>" +
        " ИЗ " +
        "<span class=\"" + totalClass + "\"></span>";
        },
    },
    navigation: {
        nextEl: ".mini-slider__arrow_next",
        prevEl: ".mini-slider__arrow_prev",
    },
});