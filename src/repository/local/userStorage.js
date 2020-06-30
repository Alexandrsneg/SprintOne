import {ApiService} from "../rest/apiService"
import {action, decorate, observable} from "mobx";

class UserStorage {

    email = ""
    password=""

    //!! конвертация в булевое значение для проверки на авторизацию
    isAuth= !!window.localStorage.getItem("token")


    saveEmail = (email) => {
        this.email = email
    }


    savePassword = (password) => {
        this.password = password
    }

    authUser = () =>{
        return ApiService({
            url: "/Users/login",
            method: "POST",
            body: {
                email: this.email,
                password: this.password
            }
        }).then(r =>{
            window.localStorage.setItem("token", r.id)
            window.location.href = "/notes"
        })
    }

    regUser = () =>{
        ApiService({
            url: "/Users",
            method: "POST",
            body: {
                email: this.email,
                password: this.password
            }
        }).then(r => console.log(r))
     }
}

decorate(UserStorage, {
    email: observable,
    password: observable,
    isAuth: observable,
    saveEmail: action,
    savePassword: action,
    authUser: action,
    regUser: action
})

const userStorage = new UserStorage();

export default userStorage;