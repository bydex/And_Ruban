import maskInput from "vanilla-text-mask";
import burger from "../../components/hamburger/hamburger";
/* this is addons for the mail mask */
// import emailMask from "text-mask-addons/dist/emailMask";

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
            if (el.value.length < 1) {
                el.parentElement.classList.remove("active");
            }
        });
    });
}

/* get the value of children label where you can see data(name or phone or etc...) */
// const inputName = document.querySelector('[data-title="Имя"]').children[0];
// let inputEmail = undefined;
// if (document.querySelector("input[type='email']")) {
//     inputEmail = document.querySelector("input[type='email']").children[0];
// }

// if (inputEmail !== undefined) {
//     maskInput({
//         inputElement: inputEmail,
//         mask: emailMask
//     });
// }



const inputTel = document.querySelectorAll("input[type='tel']"),
    phoneMask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


if (inputTel !== undefined) {
    inputTel.forEach((el) => {
        maskInput({
            inputElement: el,
            mask: phoneMask
        });
    })
}



const forms = document.querySelectorAll('.form-js');

let slicePhone = (val) => {
    let underscore = val.indexOf('_');

    if (underscore === -1) {
        return val;
    } else {
        return val.slice(0,underscore);
    }
};
const isTel = (tel) => {
    if (slicePhone(tel.value).length === 16) {
        return true;
    } else return false;
}
const validationName = input => {
    const val = input.value;
    return /^[А-ЯЁ][а-яё]+$/.test(val);
};


forms.forEach((el) => {
    el.addEventListener('submit', function(e) {
        e.preventDefault();

        let tel     = el.querySelector('input[type="tel"'),
            name    = el.querySelector('input[type="name"'),
            select  = el.querySelector('select');


        let formData = new FormData();

        if (name && name.value === null || name.value === '' || name.value.length === 0) {
            name.closest('.label-box').classList.add('label-box_is-error');
            return;
        } else if (name && name.value.length !== 0) {
            name.closest('.label-box').classList.remove('label-box_is-error');
            formData.append("name", name.value);
        }
        if (tel && isTel(tel) === false) {
            tel.closest('.label-box').classList.add('label-box_is-error');
            return;
        } else if (tel && isTel(tel)) {
            tel.closest('.label-box').classList.remove('label-box_is-error');
            formData.append("tel", tel.value);
        }
        if (select && select.value === 'null') {
            select.previousSibling.classList.add("js-Dropdown_is-error");
            return;
        } else if (select && select.value !== 'null') {
            formData.append("select", select.value);
            select.previousSibling.classList.remove('js-Dropdown_is-error');
        }


        fetch("api/SampleData", {
          body: formData,
          method: "post",
        }).then(function() {
            el.reset();
            if (select) select.previousSibling.querySelector('.js-Dropdown-title-active').innerText = '';
            el.querySelectorAll('.label-box__label.active').forEach((inputWrap) => {
                inputWrap.classList.remove('active');
            })
            burger.modalSectionTo('thanks')
        })
    })
})
