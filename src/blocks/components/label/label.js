import maskInput from "vanilla-text-mask";
/* this is addons for the mail mask */
import emailMask from "text-mask-addons/dist/emailMask";

let mainFormInputs = undefined;
if (document.querySelectorAll(".label-box__input")) {
    mainFormInputs = document.querySelectorAll(".label-box__input");
}

if (mainFormInputs !== undefined) {
    mainFormInputs.forEach((el) => {
        el.addEventListener("focus", () => {
            el.parentElement.classList.add("active");
        });
    });

    mainFormInputs.forEach((el) => {
        el.addEventListener("blur", () => {
            if (el.value < 1) {
                el.parentElement.classList.remove("active");
            }
        });
    });
}

/* get the value of children label where you can see data(name or phone or etc...) */
// const inputName = document.querySelector('[data-title="Имя"]').children[0];
let inputEmail = undefined;
if (document.querySelector("[data-title=\"Почта\"]")) {
    inputEmail = document.querySelector("[data-title=\"Почта\"]").children[0];
}

if (inputEmail !== undefined) {
    maskInput({
        inputElement: inputEmail,
        mask: emailMask
    });
}