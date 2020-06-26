import React from "react";
import UserStorage from "../../repository/local/userStorage";

class Registration extends React.Component{
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
                        <button className="buttons" onClick={UserStorage.regUser}>Зрегистрироваться</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default Registration;