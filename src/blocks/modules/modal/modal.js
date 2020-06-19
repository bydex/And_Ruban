import Swiper from "swiper";

if (document.querySelector(".modal")) {
    new Swiper(".modal", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        mousewheel: true,
        speed: 2000,
    });
}