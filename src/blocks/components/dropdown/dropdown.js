// const dropdown = document.querySelector(".dropdown"),
//     dropdownTitle = document.querySelector(".dropdown__title"),
//     dropdownTitleP = document.querySelector(".dropdown__title-p"),
//     dropdownContent = document.querySelector(".dropdown__content");

// console.log(dropdownTitle);

// dropdown.addEventListener("click", e => {
//     e.preventDefault();
//     dropdownTitleP.classList.add("active");
//     if (dropdownTitleP.classList.contains("active")) {
//         dropdownContent.classList.add("active");
//     }
// });

// const dropdownLink = document.querySelectorAll(".dropdown__link");

// dropdownLink.forEach(el => {
//     el.addEventListener("click", e => {
//         dropdownTitleP.innerHTML = e.target.innerHTML;
//         dropdownContent.classList.remove("active");
//     });
// });

// document.addEventListener("click", e => {
//     e.preventDefault();
//     if (!e.target.classList.contains("dropdown__title") && dropdownTitleP.innerHTML.length < 1) {
//         dropdownContent.classList.remove("active");
//         dropdownTitleP.classList.remove("active");
//     }
// });

// import CustomSelect from 'vanilla-js-dropdown';

/**
 * @fileOverview
 * @author Zoltan Toth
 * @version 2.2.0
 */

/**
 * @description
 * Vanilla JavaScript dropdown - a tiny (~600 bytes gzipped) select tag replacement.
 *
 * @class
 * @param {(string|Object)} options.elem - HTML id of the select or the DOM element.
 */
var CustomSelect = function (options) {
    var elem =
        typeof options.elem === 'string' ? document.getElementById(options.elem) : options.elem,
        mainClass = 'js-Dropdown',
        titleClass = 'js-Dropdown-title',
        listClass = 'js-Dropdown-list',
        optgroupClass = 'js-Dropdown-optgroup',
        selectedClass = 'is-selected',
        openClass = 'is-open',
        animateLabel = 'js-Dropdown-title-active';
        textLineClassActive = 'js-Dropdown-textLine-active';
        selectOpgroups = elem.getElementsByTagName('optgroup'),
        selectOptions = elem.options,
        optionsLength = selectOptions.length,
        index = 0;

    // creating the pseudo-select container
    var selectContainer = document.createElement('div');

    selectContainer.className = mainClass;

    if (elem.id) {
        selectContainer.id = 'custom-' + elem.id;
    }

    // creating the always visible main button
    var button = document.createElement('button');
    var textLine = document.createElement('div');

    button.className = titleClass;
    button.textContent = selectOptions[0].textContent;

    // creating the UL
    var ul = document.createElement('ul');
    ul.className = listClass;

    var textLine = document.createElement('div');
    textLine.className = 'js-Dropdown-textLine';


    // dealing with optgroups
    if (selectOpgroups.length) {
        for (var i = 0; i < selectOpgroups.length; i++) {
            var div = document.createElement('div');
            div.innerText = selectOpgroups[i].label;
            div.classList.add(optgroupClass);

            textLine.appendChild(div);
            ul.appendChild(div);
            generateOptions(selectOpgroups[i].getElementsByTagName('option'));
        }
    } else {
        generateOptions(selectOptions);
    }

    // appending the button and the list
    selectContainer.appendChild(button);
    selectContainer.appendChild(textLine);
    selectContainer.appendChild(ul);

    selectContainer.addEventListener('click', onClick);

    // pseudo-select is ready - append it and hide the original
    elem.parentNode.insertBefore(selectContainer, elem);
    elem.style.display = 'none';
    /**
     * Generates a list from passed options.
     *
     * @param {object} options - options for the whole select or for an optgroup.
     */
    function generateOptions(options) {
        for (var i = 0; i < options.length; i++) {
            var li = document.createElement('li');

            li.innerText = options[i].textContent;
            li.setAttribute('data-value', options[i].value);
            li.setAttribute('data-index', index++);

            if (selectOptions[elem.selectedIndex].textContent === options[i].textContent) {
                li.classList.add(selectedClass);
                button.textContent = options[i].textContent;
            }

            ul.appendChild(li);
        }
    }

    /**
     * Closes the current select on any click outside of it.
     *
     */
    document.addEventListener('click', function (e) {
        if (!selectContainer.contains(e.target)) close();
    });

    /**
     * Handles the clicks on current select.
     *
     * @param {object} e - The item the click occured on.
     */
    function onClick(e) {
        e.preventDefault();
        var t = e.target; // || e.srcElement; - uncomment for IE8

        if (t.className === titleClass) {
            button.classList.add(animateLabel);
            textLine.classList.add(textLineClassActive);
            toggle();
        }

        if (t.tagName === 'LI') {
            selectContainer.querySelector('.' + titleClass).innerText = t.innerText;
            elem.options.selectedIndex = t.getAttribute('data-index');

            //trigger 'change' event
            var evt = new CustomEvent('change');
            elem.dispatchEvent(evt);

            // highlight the selected
            for (var i = 0; i < optionsLength; i++) {
                ul.querySelectorAll('li')[i].classList.remove(selectedClass);
            }
            t.classList.add(selectedClass);
            close();
            if (button.innerHTML.length < 1) {
                button.classList.remove(animateLabel);
            }
            if (button.innerHTML.length > 1) {
                textLine.classList.remove(textLineClassActive);
            }
        }
    }

    /**
     * Toggles the open/close state of the select on title's clicks.
     *
     * @public
     */
    function toggle() {
        ul.classList.toggle(openClass);
    }
    /**
     * Opens the select.
     *
     * @public
     */
    function open() {
        ul.classList.add(openClass);
    }

    /**
     * Closes the select.
     *
     * @public
     */
    function close() {
        ul.classList.remove(openClass);
    }

    return {
        toggle: toggle,
        close: close,
        open: open,
    };
};

var select = new CustomSelect({
    elem: 'dropdown',
});

const jsDropdownTitle = document.querySelector('.js-Dropdown-title');
jsDropdownTitle.dataset.title = "Выберите вид мебели";
console.log(document.querySelector('.js-Dropdown-title').innerHTML.length)
jsDropdownTitle.innerHTML = '';
const jsDropdownlistItems = document.querySelectorAll('.js-Dropdown-list li');

jsDropdownlistItems.forEach(el => {
    el.classList.add('js-Dropdown-list-item');
});
