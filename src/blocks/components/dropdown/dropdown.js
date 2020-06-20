let paymenеDropdown = undefined;
if (document.querySelector(".payment__dropdown")) {
    paymenеDropdown = document.querySelector(".payment__dropdown");
}

let paymentDropdownList = undefined;
if (document.querySelector(".payment__dropdown")) {
    paymentDropdownList = document.querySelector(".payment__dropdown-list");
}
let dropdownInput = undefined;
if (document.querySelector(".dropdown__input")) {
    dropdownInput = document.querySelector(".dropdown__input");
}

let paymentDropdownLink = undefined;
if (document.querySelectorAll(".payment__dropdown-link")) {
    paymentDropdownLink = document.querySelectorAll(".payment__dropdown-link");
}
let dropdownLabel = undefined;
if (document.querySelector(".dropdown__label")) {
    dropdownLabel = document.querySelector(".dropdown__label");
}


if (paymenеDropdown !== undefined) {
    paymenеDropdown.addEventListener("mouseenter", () => {
        paymentDropdownList.classList.add("payment__dropdown_active");
        dropdownLabel.classList.add("active");
        if (dropdownLabel.classList.contains("active")) {
            dropdownInput.focus();
        }
    });
    paymenеDropdown.addEventListener("mouseleave", () => {
        if (dropdownInput.value.length < 1) {
            paymentDropdownList.classList.remove("payment__dropdown_active");
            dropdownLabel.classList.remove("active");
            dropdownInput.blur();
        }
    });
}

paymentDropdownLink.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        const inputValue = e.target.innerHTML;
        dropdownInput.value = inputValue;
        dropdownInput.blur();
        if (!dropdownLabel.classList.contains("active")) {
            dropdownLabel.classList.add("active");
        }
        if (dropdownInput.value.length > 0) {
            paymentDropdownList.classList.remove("payment__dropdown_active");
        }
    });
});