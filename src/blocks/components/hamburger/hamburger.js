const hamburgerBox = document.querySelector(".hamburger__box");
let siteOverlay = document.querySelector(".overlay");


const overlayOpen = (original) => {
    let overlay = siteOverlay;
    if (original === true) overlay = document.querySelector('.overlay_original');
    overlay.classList.add("overlay_active");
    document.body.classList.add('is-overlay');
},
overlayClose = (original) => {
    let overlay = siteOverlay;
    if (original === true) overlay = document.querySelector('.overlay_original');
    overlay.classList.remove("overlay_active");
    document.body.classList.remove('is-overlay');
};



const modal     = document.querySelector(".modal"),
    navigation  = document.querySelector(".navigation"),
    hamburger   = document.querySelector(".hamburger");

const hamburgerOpen = () => {
    hamburger.classList.add("hamburger_active");
},
hamburgerClose = () => {
    hamburger.classList.remove("hamburger_active");
};

const modalOpen = () => {
    hamburgerOpen();
    overlayOpen();
    setTimeout(() => {
        navigation.classList.add("modal_active");
        modal.classList.add("modal_active");
    }, 300);
},
modalClose = () => {
    navigation.classList.remove("modal_active");
    modal.classList.remove("modal_active");
    setTimeout(() => {
      overlayClose();
      hamburgerClose();
    }, 300);
};


hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    if (!document.body.classList.contains('watch-original')) {
        if (hamburger.classList.contains("hamburger_active")) {
            modalClose();
            return;
        } else {
            modalOpen();
        }
    }
});


document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && navigation.classList.contains("modal_active")) modalClose();
})


let burger = {
    hamburgerClose: hamburgerClose,
    hamburgerOpen: hamburgerOpen,
    overlayClose: overlayClose,
    overlayOpen: overlayOpen,
    hamburger: hamburger,
};
export default burger;
