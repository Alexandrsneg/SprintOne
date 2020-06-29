import {regUser, authUser} from "../rest/apiService"
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
        authUser(this.email, this.password)
    }

    regUser = () =>{
        regUser(this.email, this.password)
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