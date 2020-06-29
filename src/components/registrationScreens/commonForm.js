import React from "react";
import UserStorage from "../../repository/local/userStorage";
import authScreen from "../../styles/authScreen.module.css";
import forms from "../../styles/forms.module.css";
import {Link} from "react-router-dom";
import Main from "../mainScreen/main";

class CommonForm extends React.Component{

    storageFun = this.props.storageFun
    buttonName = this.props.buttonName

    //функция-обработчик изменения состояния инпута логина
    onLoginChangeHandler = (event) =>{
        UserStorage.saveEmail(event.target.value)
    }
    //функция-обработчик изменения состояния инпута пароля
    onPasswordChangeHandler = (event) =>{
        UserStorage.savePassword(event.target.value)
    }

    render() {
        return (
            <div className={authScreen.authScreen}>
                <form className={forms.forms}>
                    <input className={forms.inputs} defaultValue={UserStorage.email} onChange={this.onLoginChangeHandler}
                           placeholder= 'логин'/>
                    <input className={forms.inputs} defaultValue={UserStorage.password} onChange={this.onPasswordChangeHandler}
                           placeholder='пароль'/>
                    <Link to="/notes">
                        <button className={forms.buttons} onClick={this.storageFun}>{this.buttonName}</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default CommonForm