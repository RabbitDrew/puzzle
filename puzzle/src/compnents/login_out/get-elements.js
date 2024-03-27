//checking type and get elements
export const getElement = (className) => {
    const element = document.querySelector(`.${className}`);
    if (!element) {
        throw console.error("the element is undefined");
    }
    else {
        return element;
    }
};
export const getElementFromNodeList = (className, index) => {
    const elements = document.querySelectorAll(`.${className}`);
    /*return needed el from node list make arr from node list then apply method
    find to array and the return found element */
    return Array.from(elements).find((_, i) => i === index);
};
//# sourceMappingURL=get-elements.js.map