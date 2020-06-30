import React from "react";
import UserStorage from "../../repository/local/userStorage"
import CommonForm from "./commonForm";
import {Redirect} from "react-router-dom";


class Authorization extends React.Component{

    onAuthUser = () => UserStorage.authUser()

    render() {
        return (
            <CommonForm storageFun ={this.onAuthUser} buttonName={"Авторизоваться"} />

        );
    }
}

export default Authorization;