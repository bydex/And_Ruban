import Swiper from "swiper";
import cardMethods from "../tabs/tabs";

const cardThumbs = new Swiper("#make-card-thumb", {
    allowTouchMove: false,
});
if (document.querySelector("#make-card-slider")) {
    const makeSlider = new Swiper("#make-card-slider", {
        navigation: {
            nextEl: "#make-card-slider .card-slider__arrow_next",
        },
        thumbs: {
            swiper: cardThumbs,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
    });

    makeSlider.on("slideChange", function () {
        const tabs        = cardThumbs.wrapperEl,
              underline   = tabs.querySelector('.tabs__underline'),
              active      = tabs.querySelector('.swiper-slide-thumb-active [data-tabs-item]');

        cardMethods.setUnderline(active, underline);
        setTimeout(cardMethods.setTabTitle, 0, tabs.closest('.tabs'));

        Array.from(active.parentNode.parentNode.children).forEach((elchild) => {
            if (elchild.classList.contains("tabs__item_active")) {
                elchild.classList.remove("tabs__item_active");
            }
        });
        active.parentNode.classList.add("tabs__item_active");
    });
}

if (document.querySelector("#make-card-slider2")) {
    new Swiper("#make-card-slider2", {
        loop: true,
        navigation: {
            nextEl: "#make-card-slider2 .card-slider__arrow_next",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
    });
}
