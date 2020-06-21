const dropdown = document.querySelector(".dropdown"),
    dropdownTitle = document.querySelector(".dropdown__title"),
    dropdownTitleP = document.querySelector(".dropdown__title-p"),
    dropdownContent = document.querySelector(".dropdown__content");

console.log(dropdownTitle);

dropdown.addEventListener("click", e => {
    e.preventDefault();
    dropdownTitleP.classList.add("active");
    if (dropdownTitleP.classList.contains("active")) {
        dropdownContent.classList.add("active");
    }
});

const dropdownLink = document.querySelectorAll(".dropdown__link");

dropdownLink.forEach(el => {
    el.addEventListener("click", e => {
        dropdownTitleP.innerHTML = e.target.innerHTML;
        dropdownContent.classList.remove("active");
    });
});

document.addEventListener("click", e => {
    e.preventDefault();
    if (!e.target.classList.contains("dropdown__title") && dropdownTitleP.innerHTML.length < 1) {
        dropdownContent.classList.remove("active");
        dropdownTitleP.classList.remove("active");
    }
});