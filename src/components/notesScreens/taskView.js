import * as React from "react";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage"
import {Link} from "react-router-dom";




class TaskView extends React.Component{

render() {
    return (
        <div>
            <form className={notes.forms}>
                <div className={notes.taskDiv}>
                    <h2>{this.props.title}</h2>
                        {this.props.body}
                    </div>
                {this.props.done ?
                    <button className={notes.button_done}
                            onClick={() => TasksStorage.changeStatusOfTask(this.props.id, this.props.done)}>Готово</button> :
                    <button className={notes.button_not_done}
                            onClick={() => TasksStorage.changeStatusOfTask(this.props.id, this.props.done)}>Не готово</button>
                }
                <Link to="/edit"> <button className={notes.button_edit} >Изменить</button></Link>
                    <button className={notes.button_delete} onClick={()=> TasksStorage.deleteTask(this.props.id)}>Удалить</button>
            </form>
        </div>

    )
}
}

export default TaskView;