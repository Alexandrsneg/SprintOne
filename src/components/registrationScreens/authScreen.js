import React from "react";
import authScreen from "../../styles/authScreen.css";
import forms from "../../styles/forms.css";
import buttons from "../../styles/forms.css";
import {Link, Route, Router} from "react-router-dom";
import UserStorage from "../../repository/local/userStorage"


class Authorization extends React.Component{

    //функция-обработчик изменения состояния инпута логина
    onLoginChangeHandler= (event) =>{
        UserStorage.saveEmail(event.target.value)
    }
    //функция-обработчик изменения состояния инпута пароля
    onPasswordChangeHandler(event){
        UserStorage.savePassword(event.target.value)
    }



    render() {
        return (
            <div className="authScreen">
                    <form className="forms">
                        <div>
                        <input className="inputs" onChange={this.onLoginChangeHandler}
                            placeholder= 'email'/>
                            <br/>
                        <input className="inputs" onChange={this.onPasswordChangeHandler}
                            placeholder='password'/>
                        <br/>
                            <Link to="/notes">
                                <button className="buttons" onClick={UserStorage.authUser}>Войти</button>
                            </Link>
                        </div>
                    </form>
            </div>
        );
    }
}


export default Authorization;