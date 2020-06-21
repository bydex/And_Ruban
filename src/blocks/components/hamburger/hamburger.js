const hamburgerBox = document.querySelector(".hamburger__box");
const siteOverlay = document.querySelector(".overlay");

console.log(hamburgerBox, siteOverlay);

if (document.querySelector(".hamburger")) {
    const modal = document.querySelector(".modal"),
        navigation = document.querySelector(".navigation"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", e => {
        e.preventDefault();
        hamburger.classList.toggle("hamburger_active");
        if (!hamburger.classList.contains("hamburger_active")) {
            navigation.classList.remove("modal_active");
            modal.classList.remove("modal_active");
            setTimeout(() => {
                siteOverlay.classList.remove("overlay_active");
            }, 300);
            return;
        }
        hamburger.classList.contains("hamburger_active");
        siteOverlay.classList.add("overlay_active");
        setTimeout(() => {
            console.log("setTimeout");
            navigation.classList.add("modal_active");
            modal.classList.add("modal_active");
        }, 300);
    });
}