import React from "react";
import UserStorage from "../../repository/local/userStorage";
import {Link} from "react-router-dom";
import authScreen from "../../styles/authScreen.module.css";
import forms from "../../styles/forms.module.css";
import CommonForm from "./commonForm";

class Registration extends React.Component{

    render() {
        return (
            <CommonForm storageFun ={UserStorage.regUser()} buttonName={"Зарегистрироваться"} />
        );
    }
}


export default Registration;