import React from "react";
import authScreen from "../../styles/authScreen.css";
import forms from "../../styles/forms.css";
import buttons from "../../styles/forms.css";
import {Link, Route, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';

class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            login: '',
            pass: ''
        }
    }
    //функция-обработчик изменения состояния инпута логина
    onLoginChangeHandler = (event) =>{
        this.setState({login: event.target.value})
    }
    //функция-обработчик изменения состояния инпута пароля
    onPasswordChangeHandler = (event) =>{
        this.setState({pass: event.target.value})
    }

    //функция-обработчик нажатия на кнопку ВОЙТИ
    onBtnClickHandler = () =>{
        alert(this.state.pass)
    }


    render() {
        return (
            <div className="authScreen">
                    <form className="forms">
                        <div>
                        <input className="inputs" value={this.state.login} onChange={this.onLoginChangeHandler}
                            placeholder= 'логин'/>
                            <br/>
                        <input className="inputs" value={this.state.pass} onChange={this.onPasswordChangeHandler}
                            placeholder='пароль'/>
                        <br/>
                            <Link to="/register">
                                <button className="buttons" onClick={this.onBtnClickHandler}>Войти</button>
                            </Link>
                        </div>
                    </form>
            </div>
        );
    }
}


export default Authorization;