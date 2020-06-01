import helpers from "../../../js/import/components";

let position    = helpers.position,
    rem         = helpers.rem;

let tabs        = document.querySelector('.tabs'),
    tab         = tabs.querySelectorAll('.tabs__item'),
    underline   = tabs.querySelector('.tabs__underline');

const setUnderline = (element) => {
    const positions = position(element);
    let left    = rem(positions.left),
        top     = rem(positions.top + element.offsetHeight);
    underline.style.width = rem(element.offsetWidth);
    underline.style.transform = `translate(${left},${top})`;
},
setOnLoad = () => {
    if (tabs.querySelector('.tabs__item_active')) {
        let element = tabs.querySelector(".tabs__item_active");
        setUnderline(element);
    }
}
window.addEventListener('resize orientationchange', setOnLoad);
setOnLoad();

tab.forEach((el) => {
    el.addEventListener('click', function() {
        setUnderline(this);
        Array.from(this.parentNode.children).forEach((el) => {
            if (el.classList.contains('tabs__item_active')) {
                el.classList.remove("tabs__item_active");
            }
        })
        this.classList.add('tabs__item_active');
    })
})
