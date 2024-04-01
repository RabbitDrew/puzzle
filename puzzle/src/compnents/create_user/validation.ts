import { getNodeListOfElements } from "../get_html_elements/get-elements";
import { getElementFromNodeList } from "../get_html_elements/get-elements";
//get the btn login
const btn = getElementFromNodeList("btn-log", 1)
//err function 
const err = function (element:HTMLElement, toggleClass:string):void {
        element.classList.add(toggleClass)
        setTimeout(() => {element.classList.remove(toggleClass)},1500);
}
//validation 
export const validation = function () { //export validation function to the create_user module 
    const getInputs = getNodeListOfElements('entry-input')
    const getLable = getNodeListOfElements("inputs-label")
    let userNameAndSUrname:string[] = []
    //if validation below passed add value of inputs to the variables name and wurname 
    let valueOfName: string = "";
    let valueOfSurname:string ="";
    let valueOfEmail:string ="";
    //regulare expression for checking input value
    const regExpression =/^[A-Z][a-z]+(?:-[a-z]+)*$/;
    const regExpressionEmail = /^[A-Za-z0-9][A-Za-z0-9.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/
    getInputs.forEach((input: HTMLInputElement, i:number) => {
        if (i === 0) {//check for name input 
            // check input field length,and reg expression method test 
            if (input.value === "" 
            || input.value.length<3 ||!regExpression.test(input.value)) {
                err(input,"valid-err") // highlite the input when there is error 
                err(getLable[i], "valid-err__lable") //highlite the lable when there is error 
            } else {
                valueOfName = input.value;
            } 
        } else if ( i === 1) {//check for surname input
            // check input field length,and reg expression method test 
            if (input.value === "" 
                || input.value.length<4 
                || !regExpression.test(input.value)){
                err(input, "valid-err")
                err(getLable[i], "valid-err__lable") 
            }else {
                valueOfSurname = input.value
            }
        } else if (i === 2) {
            if (input.value === "" 
                || input.value.length<4 
                || !regExpressionEmail.test(input.value)){
                err(input, "valid-err")
                err(getLable[i], "valid-err__lable") 
            }else {
                valueOfEmail = input.value
            }
        }

    });
    //sent valueOfName and valueOfSurname to the array userNameAndSUrname
    userNameAndSUrname.push(valueOfName,valueOfSurname,valueOfEmail)
    return userNameAndSUrname
  };

  //add event listner for btn 
  btn.addEventListener("click", () =>{
    validation()
  })
