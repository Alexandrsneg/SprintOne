import * as React from "react";
import main from "../../styles/mainScreen.css"
import button from "../../styles/button.css"
import Navigate from "./navigate";
import {Link, Route, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Authorization from "../registrationScreens/authScreen";
import Registration from "../registrationScreens/registrationScreen";


class Main extends React.Component{
    render() {
        return (
            <div className="main">
                <Router history={createBrowserHistory()}>
                <Link className="button" to="/login"> Авторизироваться
            </Link>
                <Link className="button" to="/register">
                    Зарегистрироваться
                </Link>
                    <h1>Мои заметки</h1>
                    <div>
                        <Route exact path="/login" component={Authorization}/>
                        <Route exact path="/register" component={Registration}/>
                        <Route exact path="/" component={Main}/>
                    </div>
                </Router>

                     </div>

        );
    }
}

export default Main