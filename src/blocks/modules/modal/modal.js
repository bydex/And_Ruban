import Swiper from "swiper";

let modalScroll = undefined;
if (document.querySelector(".modal")) {
    modalScroll = new Swiper(".modal", {
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

export default modalScroll;
