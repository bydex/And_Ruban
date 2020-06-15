import helpers from "../../../js/import/components";

let position    = helpers.position,
    rem         = helpers.rem;

let tabs        = document.querySelectorAll('[data-tabs]');


tabs.forEach((el) => {
    const tab       = el.querySelectorAll("[data-tabs-item]"),
          underline = el.querySelector("[data-tabs-underline]");

    const setUnderline = (element) => {
        const positions = position(element);
        let left        = rem(positions.left),
            top         = rem(positions.top + element.offsetHeight);
        underline.style.width       = rem(element.offsetWidth);
        underline.style.transform   = `translate(${left},${top})`;
    },
    setOnLoad = () => {
        if (el.querySelector('.tabs__item_active')) {
            let element = el.querySelector(".tabs__item_active [data-tabs-item]");
            setUnderline(element);
        };
    }
    window.addEventListener('resize orientationchange', setOnLoad);
    setOnLoad();

    tab.forEach((eltab) => {
        eltab.closest('.tabs__item').addEventListener('click', function() {
            const thistab = this.closest('.tabs__item');
            setUnderline(this.querySelector('[data-tabs-item]'));
            Array.from(thistab.parentNode.children).forEach((elchild) => {
                if (elchild.classList.contains('tabs__item_active')) {
                    elchild.classList.remove("tabs__item_active");
                }
            })
            thistab.classList.add("tabs__item_active");
        })
    })
})
