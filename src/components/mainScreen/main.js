import * as React from "react";
import main from "../../styles/mainScreen.module.css"
import router from "../../styles/router.module.css"
import {Link, Redirect, Route, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Authorization from "../registrationScreens/authScreen";
import Registration from "../registrationScreens/registrationScreen";
import AllNotesScreen from "../notesScreens/allNotesScreen";
import userStorage from "../../repository/local/userStorage";



/*приватный роутер для перехода на экран заметок в случае если авторизация пройдена
пока на заглушках, + тернарный оператор работает в обратную сторону???
*/
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => (!auth) ?  <Redirect to="/login"/> : <Component {...props} />
        }
    />
);

const logout = () => {
    window.localStorage.clear()
}

class Main extends React.Component{
    render() {
        return (
            <div className={main.main}>
                <Router history={createBrowserHistory()}>
                    <Link to="/login"> <button className={router.button} >Авторизоваться</button></Link>
                    <Link to="/registr"><button className={router.button} >Зарегистрироваться</button></Link>
                    <Link to="/notes"><button className={router.button}  >Заметки</button></Link>
                    <Link to="/login"><button onClick={logout} className={router.button_logout}  >Выйти</button></Link>
                    <h2>Мои заметки</h2>
                    <div>
                        <Route exact path="/login" component={Authorization}/>
                        <Route exact path="/registr" component={Registration}/>
                        <PrivateRoute exact path="/notes" auth={userStorage.isAuth} component={AllNotesScreen}/>
                    </div>
                </Router>
                     </div>
        );
    }
}

export default Main