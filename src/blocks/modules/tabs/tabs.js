import helpers from "../../../js/import/components";

let position    = helpers.position,
    rem         = helpers.rem;

let tabs        = document.querySelectorAll('[data-tabs]');


const setUnderline = (element, underline) => {
    const positions = position(element);
    let left        = rem(positions.left),
        top         = rem(positions.top + element.offsetHeight);
    underline.style.width       = rem(element.offsetWidth);
    underline.style.transform   = `translate(${left},${top})`;
}, setTabTitle = (tab) => {
    const tabsTitle = tab.previousElementSibling,
        activeText  = tab.querySelector('.tabs__item_active').textContent,
        wrapper     = tab.closest('.tabs__wrapper'),
        hamburger   = wrapper.querySelector('.hamburger_tabs');

    tabsTitle.textContent = activeText;
    hamburger.classList.remove('hamburger_active');
    wrapper.classList.remove('tabs__wrapper_active');
};
tabs.forEach((el) => {
    const tab           = el.querySelectorAll("[data-tabs-item]"),
          underline     = el.querySelector("[data-tabs-underline]"),
          tabWrapper    = el.closest('.tabs__wrapper'),
          tabsHamburger = tabWrapper.querySelector('.hamburger_tabs');

    tabsHamburger.addEventListener('click', () => {
        tabWrapper.classList.toggle('tabs__wrapper_active');
        if (tabsHamburger.classList.contains('hamburger_active')) {
            tabsHamburger.classList.remove('hamburger_active');
        } else {
            tabsHamburger.classList.add('hamburger_active');
        }
    });
    const setOnLoad = () => {
        let element = el.querySelector(".tabs__item_active [data-tabs-item]");
        if (el.querySelector('.tabs__item_active')) {

            setUnderline(element, underline);
            setTabTitle(el, element, tabsHamburger);
        };
    }
    window.addEventListener('resize orientationchange', setOnLoad);
    setOnLoad();

    tab.forEach((eltab) => {
        eltab.closest('.tabs__item').addEventListener('click', function() {
            const thistab = this.closest('.tabs__item');
            setUnderline(this.querySelector('[data-tabs-item]'), underline);
            Array.from(thistab.parentNode.children).forEach((elchild) => {
                if (elchild.classList.contains('tabs__item_active')) {
                    elchild.classList.remove("tabs__item_active");
                }
            })
            thistab.classList.add("tabs__item_active");
            setTabTitle(el, thistab, tabsHamburger);
        })
    })
})



const cardMethods = {
    setUnderline: setUnderline,
    setTabTitle: setTabTitle
}

export default cardMethods;
