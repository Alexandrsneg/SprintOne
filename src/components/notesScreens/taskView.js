import * as React from "react";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage"
import {observer} from "mobx-react";
import {Link} from "react-router-dom";




class TaskView extends React.Component{

    redirect = () =>{
       return window.location.href=`/edit/${this.props.id}`
    }

    changeButtonLocal = () =>{

    }

render() {
    return (
        <div>
            <form className={notes.forms}>
                <div className={notes.taskDiv}>
                    <h2>{this.props.title}</h2>
                        {this.props.body}
                    </div>
                {this.props.done ?
                    <div className={notes.button_done}
                          onClick={() =>TasksStorage.changeStatusOfTask(this.props.id, this.props.done)}>Готово</div> :
                    <div className={notes.button_not_done}
                         onClick={() => TasksStorage.changeStatusOfTask(this.props.id, this.props.done)}>Не готово</div>
                }
                 <div className={notes.button_edit} onClick={this.redirect}>Изменить</div>
                    <div className={notes.button_delete} onClick={()=> TasksStorage.deleteTask(this.props.id)}>Удалить</div>
            </form>
        </div>

    )
}
}

export default observer(TaskView);