import Swiper from "swiper";

const cardThumbs = new Swiper("#make-card-thumb", {
    allowTouchMove: false,
});
if (document.querySelector("#make-card-slider")) {
    new Swiper("#make-card-slider", {
        navigation: {
            nextEl: "#make-card-slider .card-slider__arrow_next",
        },
        thumbs: {
            swiper: cardThumbs,
        },
        loop: true,
    });
}

if (document.querySelector("#make-card-slider2")) {
    new Swiper("#make-card-slider2", {
        loop: true,
        navigation: {
            nextEl: "#make-card-slider2 .card-slider__arrow_next",
        },
    });
}