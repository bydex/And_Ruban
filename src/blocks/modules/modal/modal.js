import Swiper from "swiper";

let modalScroll = undefined;
if (document.querySelector(".modal")) {
    let modalScrollSettings = {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        mousewheel: true,
        speed: 2000,
        allowTouchMove: false,
    };
    let windowWidth = window.innerWidth,
        isMobile    = windowWidth < 767;

    if (isMobile) modalScrollSettings.allowTouchMove = true;
    modalScroll = new Swiper(".modal", modalScrollSettings);
}

export default modalScroll;
