import {observable} from "mobx";
import {regUser, authUser} from "../rest/apiService"

class UserStorage {
    userData = {
        id : 0,
        email : "",
        password : "",
    }

    saveEmail = (email) => {
        this.userData.email = email
    }
    savePassword = (password) => {
        this.userData.password = password
    }

    saveId = (id) => {
        this.userData.id = id
    }
    get getEmail(){
        return this.userData.email
    }
    get getPassword(){
        return this.userData.password
    }



    authUser = () =>{
        authUser(this.userData.email, this.userData.password)
    }

    regUser = () =>{
        regUser(this.userData.email, this.userData.password)
    }

}

export default UserStorage;