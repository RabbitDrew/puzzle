//checking type and get elements
export const getElement = (className:string):HTMLElement => {
    const element = document.querySelector(`.${className}`)
    if (!element){ 
        throw console.error("the element is undefined");
    } else {
        return element as HTMLElement
    }
}
export const getElementFromNodeList = (className: string, index: number): HTMLElement => {
  const elements = document.querySelectorAll(`.${className}`);
  /*return needed el from node list make arr from node list then apply method 
  find to array and the return found element */ 
  return Array.from(elements).find((_,i:number):boolean=> i === index) as HTMLElement
}
