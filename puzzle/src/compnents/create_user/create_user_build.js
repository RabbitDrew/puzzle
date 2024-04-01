import "../get_html_elements/get-elements";
//import types 
import "./types_ts/types";
export default class createUser {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    // Check users and return arr of all users from local storage
    // In order to create first user
    checkLoclaStorgae() {
        let arrOfExistingUsers = [];
        // get keys of all storage
        for (let i = 0; i < localStorage.length; i++) {
            arrOfExistingUsers.push(localStorage.key(i));
        }
        console.log(arrOfExistingUsers);
        return arrOfExistingUsers;
    }
    checkUserEmail() {
        //add check types
        let userMailAddresses = new Set();
        for (let i = 0; i < localStorage.length; i++) {
            const keyValues = localStorage.getItem(localStorage.key(i));
            if (!keyValues) { //check type 
                throw console.error("undefined"); //change the message
            }
            else {
                const mail = JSON.parse(keyValues);
                userMailAddresses.add(mail.email);
            }
        }
        console.log(userMailAddresses);
        return userMailAddresses;
    }
    // add new user in local storage
    setUser(users, emails) {
        let numberOfUser = 0; // number of new User 
        if (users.length <= 0) { // create the first user
            const user = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                active: false
            };
            localStorage.setItem("person", JSON.stringify(user));
        }
        else { // create the rest of users     
            for (let mail of emails) {
                if (mail === this.email) { //check users if some user has the smae email addres 
                    throw console.error("User with the same email addres already exists");
                }
                else {
                    numberOfUser += 1;
                    let newUser = "person" + "№" + numberOfUser.toString();
                    const person = {
                        name: this.name,
                        surname: this.surname,
                        email: this.email,
                        active: false
                    };
                    localStorage.setItem(newUser, JSON.stringify(person));
                }
            }
        }
    }
}
//# sourceMappingURL=create_user_build.js.map