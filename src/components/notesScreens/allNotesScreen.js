import React from "react";
import TaskView from "./taskView";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage"
import {Link} from "react-router-dom";
import {observer} from "mobx-react";




class AllNotesScreen extends React.Component{

    componentDidMount() {
        TasksStorage.getTasks()
    }

    tasksCount = () => alert(TasksStorage.tasksData.count)

    render() {
        return (
            <div>
                <h1>Экран заметок</h1>
                <Link to="/create"> <button className={notes.button_add}>+</button></Link>
                <button className={notes.button_add} onClick={this.tasksCount}>?</button>
                {TasksStorage.tasksData.tasks.map((value) => {
                return <TaskView key={value.id}
                                 done={value.done}
                                 title={value.title}
                                 body={value.body}
                                 id={value.id}
                                 />})}
             </div>
        );
    }
}

export default observer(AllNotesScreen);