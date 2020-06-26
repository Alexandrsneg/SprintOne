import * as React from "react";
import main from "../../styles/mainScreen.css"
import button from "../../styles/button.css"
import {Link, Redirect, Route, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Authorization from "../registrationScreens/authScreen";
import Registration from "../registrationScreens/registrationScreen";
import AllNotesScreen from "../notesScreens/allNotesScreen";



/*приватный роутер для перехода на экран заметок в случае если авторизация пройдена
пока на заглушках, + тернарный оператор работает в обратную сторону???
*/
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => (!auth) ? <Redirect to="/login"/> : <Component {...props} />
        }
    />
);


class Main extends React.Component{
    render() {
        return (
            <div className="main">
                <Router history={createBrowserHistory()}>
                    <Link to="/login"> <button className="buttons" >Авторизоваться</button></Link>
                    <Link to="/registr"><button className="buttons" >Зарегистрироваться</button></Link>
                    <Link to="/notes"><button className="buttons"  >Заметки</button></Link>
                    <h1>Мои заметки</h1>
                    <div>
                        <Route exact path="/login" component={Authorization}/>
                        <Route exact path="/registr" component={Registration}/>
                        <PrivateRoute exact path="/notes" auth={false} component={AllNotesScreen}/>
                    </div>
                </Router>
                     </div>

        );
    }
}

export default Main