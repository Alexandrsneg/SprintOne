import React from "react";
import UserStorage from "../../repository/local/userStorage";
import CommonForm from "./commonForm";

class Registration extends React.Component{

    onRegUser = () => UserStorage.regUser()

    render() {
        return (
            <CommonForm storageFun ={this.onRegUser} buttonName={"Зарегистрироваться"} />
        );
    }
}


export default Registration;