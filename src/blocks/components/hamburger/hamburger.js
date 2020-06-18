if (document.querySelector(".hamburger")) {
    // const navigation = document.querySelector('.navigation__items')
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", e => {
        e.preventDefault();
        hamburger.classList.toggle("hamburger_active");
        // navigation.classList.toggle('navigation__items_active');
    });
}