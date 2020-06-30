import * as React from "react";
import main from "../../styles/mainScreen.module.css"
import router from "../../styles/router.module.css"
import {Link, Redirect, Route, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Authorization from "../registrationScreens/authScreen";
import Registration from "../registrationScreens/registrationScreen";
import AllNotesScreen from "../notesScreens/allNotesScreen";
import userStorage from "../../repository/local/userStorage";
import {observer} from "mobx-react";
import EditTask from "../notesScreens/editTask";



const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => (!auth) ?  <Redirect to="/login"/> : <Component {...props} />
        }
    />
);

//кнопка "выйти"
const logout = () => {
    window.localStorage.clear()
    window.location.reload()
}

class Main extends React.Component{
    render() {
        return (
            userStorage.isAuth ?
                <div className={main.main}>
                    <Router history={createBrowserHistory()}>
                        <Link to="/login"><button onClick={logout} className={router.button_logout}  >Выйти</button></Link>
                        <h2>Мои заметки</h2>
                        <div>
                            <PrivateRoute exact path="/notes" auth={userStorage.isAuth} component={AllNotesScreen}/>
                            <Route exact path="/edit" component={EditTask}/>
                        </div>
                    </Router>
                </div> :
                <div className={main.main}>
                <Router history={createBrowserHistory()}>
                    <Link to="/login"> <button className={router.button} >Авторизоваться</button></Link>
                    <Link to="/registr"><button className={router.button} >Зарегистрироваться</button></Link>
                    <h2>Мои заметки</h2>
                    <div>
                        <Route exact path="/login" component={Authorization}/>
                        <Route exact path="/registr" component={Registration}/>
                    </div>
                </Router>
                     </div>

        );
    }
}

export default observer(Main)