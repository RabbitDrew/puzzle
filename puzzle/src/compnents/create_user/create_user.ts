import { getElementFromNodeList } from "../get_html_elements/get-elements";
import createUser from "./create_user_build";
import { validation } from "./validation";
//add user to the local storage 
const getBtn = getElementFromNodeList("btn-log",1)
const newUser = function (userData:string[]):void {
    let userName:string = ""
    let userSurname: string =""
    let userEmail: string= ""
    userData.forEach((data:string, i:number) => {
      if (i === 0) {
        userName = data
      } else if (i === 1) {
        userSurname = data
      } else if (i === 2) {
        userEmail = data
      }
    })
    let newUser = new createUser(userName, userSurname, userEmail) 
    newUser.setUser(newUser.checkLoclaStorgae(),newUser.checkUserEmail())
    console.log(newUser.checkUserEmail())
}

getBtn.addEventListener("click", ()=> {
newUser(validation())
})

