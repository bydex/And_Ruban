import "../../blocks/components/label/label";

const helpers = {
    position: (child) => {
        const childPos = {
            left: child.offsetLeft,
            top: child.offsetTop
        };
        const childOffset = {
            top: childPos.top,
            left: childPos.left
        };
        return childOffset;
    },
    rem: (num) => {
        return `${num / 16}rem`;
    }
};


export default helpers;
