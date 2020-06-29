import React from "react";
import forms from "../../styles/forms.module.css";
import authScreen from "../../styles/authScreen.module.css";
import {Link, Route, Router} from "react-router-dom";
import UserStorage from "../../repository/local/userStorage"
import CommonForm from "./commonForm";


class Authorization extends React.Component{


    render() {
        return (
            <CommonForm storageFun ={UserStorage.authUser()} buttonName={"Авторизоваться"} />
        );
    }
}


export default Authorization;