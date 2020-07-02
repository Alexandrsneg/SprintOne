import React from "react";
import TaskView from "./taskView";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage"
import {Link} from "react-router-dom";

const addTask = () => {
    TasksStorage.addTask()

}

class AllNotesScreen extends React.Component{

    render() {
        return (
            <div>
                <h1>Экран заметок</h1>
                <Link to="/create"> <button className={notes.button_add} >+</button></Link>
                <TaskView done={false} id={1} />

                <div>

                </div>
             </div>
        );
    }
}


export default AllNotesScreen;