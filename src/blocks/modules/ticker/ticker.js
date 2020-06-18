import Swiper from "swiper";

if (document.querySelector("ticker")) {
    new Swiper(".ticker", {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 0,
        },
        speed: 10000,
        allowTouchMove: false
    });
}
