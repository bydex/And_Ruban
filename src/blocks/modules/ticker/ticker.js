import Swiper from "swiper";

<<<<<<< HEAD
new Swiper(".ticker", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 10000,
    allowTouchMove: false
});
=======
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
>>>>>>> 22be3c08327c0d326362c4924ca820161d33302a
