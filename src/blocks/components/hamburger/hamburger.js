import modalScroll from '../../modules/modal/modal';

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

const callModal     = document.querySelectorAll('[data-modal]'),
    modalContents   = document.querySelectorAll('.modal-content');

const modal     = document.querySelector(".modal"),
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
        modal.classList.add("modal_active");
        modalScroll.update();
    }, 300);
},
modalClose = () => {
    modal.classList.remove("modal_active");
    setTimeout(() => {
      overlayClose();
      hamburgerClose();
    }, 300);
};


const modalSectionTo = (className) => {
    let modalActive = document.querySelector('.modal__content').querySelector(`.${className}`);

    modalContents.forEach((modalContent) => {
        modalContent.classList.remove('modal_active');
    })

    modalActive.classList.add('modal_active');
}

const modalSectionLinks = document.querySelectorAll('[data-modal-section]');

modalSectionLinks.forEach((el) => {
    el.addEventListener('click', function() {
        let modalClass = this.dataset.modalSection;
        modalSectionTo(modalClass);
    })
})

callModal.forEach((el) => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        let modalClass  = this.dataset.modal;

        modalSectionTo(modalClass);

        if (!document.body.classList.contains('watch-original')) {
            if (hamburger.classList.contains("hamburger_active")) modalClose();
            else  modalOpen();
        }
    })

})

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && modal.classList.contains("modal_active")) modalClose();
})


const navLinks = document.querySelectorAll('.navigation__list-link');

navLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        modalClose();
    })
})


let burger = {
    hamburgerClose: hamburgerClose,
    hamburgerOpen: hamburgerOpen,
    overlayClose: overlayClose,
    overlayOpen: overlayOpen,
    hamburger: hamburger,
};
export default burger;
