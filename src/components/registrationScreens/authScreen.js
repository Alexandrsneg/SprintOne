import React from "react";

class Authorization extends React.Component{
    render() {
        return (
            <div className="authScreen">
                <h1>Экран авторизации</h1>
                <div>
                    <form>
                        <input
                            type='text'
                            defaultValue=''
                            placeholder= 'логин'
                        /><br/>
                        <input
                            placeholder='пароль'>
                </input><br/>
                        <button>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Authorization;