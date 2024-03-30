import { getNodeListOfElements } from "./get-elements";
import { getElementFromNodeList } from "./get-elements";
//get the btn login
const btn = getElementFromNodeList("btn-log", 1)
//err function 
const err = function (element:HTMLElement, toggleClass:string):void {
        element.classList.add(toggleClass)
        setTimeout(() => {element.classList.remove(toggleClass)},1500);
}
//validation 
const validation = function (): void {
    const getInputs = getNodeListOfElements('entry-input')
    const getLable = getNodeListOfElements("inputs-label")
    let valueOfName: string = "";
    let valueOfSurname:string ="";
    //regulare expression for checking input value
    const regExpression =/^[A-Z][a-z]+(?:-[a-z]+)*$/;
    getInputs.forEach((input: HTMLInputElement, i:number) => {
        if (i === 0) {
            if (input.value === "" 
            || input.value.length<3 ||!regExpression.test(input.value)) {
                err(input,"valid-err") // highlite the input when there is error 
                err(getLable[i], "valid-err__lable") //highlite the lable when there is error 
            } else {
                valueOfName = input.value;
            } 
        } else if ( i === 1) {
            if (input.value === "" 
                || input.value.length<4 
                || !regExpression.test(input.value)){
                err(input, "valid-err")
                err(getLable[i], "valid-err__lable") 
            }else {
                valueOfSurname = input.value
            }
        }

    });

    console.log(valueOfName, valueOfSurname)
  };

  //add event listner for btn 
  btn.addEventListener("click", () =>{
    validation()
  })
