import React from "react";
import {Router , Route } from "react-router";
import Authorization from "../registrationScreens/authScreen";
import Registration from "../registrationScreens/registrationScreen";
import Main from "./main";
import { createBrowserHistory } from 'history';
import {Link} from "react-router-dom";


class Navigate extends React.Component{
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <div>
                    <Route exact path="/login" component={Authorization}/>
                    <Route exact path="/register" component={Registration}/>
                    <Route exact path="/" component={Main}/>
                </div>
            </Router>
        );
    }
}


export default Navigate