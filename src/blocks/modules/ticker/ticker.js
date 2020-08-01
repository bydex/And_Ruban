import Swiper from "swiper";

new Swiper(".ticker", {
    spaceBetween: 30,
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 25000,
    allowTouchMove: false,
});
