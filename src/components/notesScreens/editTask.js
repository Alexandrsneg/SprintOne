import React from "react";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage";
import {Redirect, withRouter} from "react-router-dom";
import {observer} from "mobx-react";




class EditTask extends React.Component{

    //флаг на изменения заметки
    changes;


    //защита от закрытия без сохранения изменений в заметке
   safetyClose = () =>{
       if (this.changes) {
           if(window.confirm("Закончить редактирование без сохранения?")){
               return window.location.href="/notes"
           } else {
               console.log("mes")
           }
       } else {
           return window.location.href="/notes"
       }
    }

    //обраотчик сохранения изменений в заметке
    saveButton = () =>{
       //запрос на сервер на редактирование заметки
        TasksStorage.editTask(this.props.match.params.id)
        this.changes = false
    }


    //функция-обработчик изменения состояния заголовка
    onTitleChangeHandler = (event) =>{
        TasksStorage.setTitle(event.target.value)
        this.changes = true
    }
//функция-обработчик изменения состояния заметки
    onBodyChangeHandler = (event) =>{
        TasksStorage.setBody(event.target.value)
        this.changes = true
    }

    componentDidMount() {
        TasksStorage.getTaskById(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                <h1>Редактирование заметки</h1>
                <form className={notes.forms}>
                    <input className={notes.inputs} defaultValue={TasksStorage.task.title} onChange={this.onTitleChangeHandler} placeholder="Title"/>
                    <div className={notes.button_close}  onClick={ this.safetyClose}>X</div>
                    <textarea className={notes.textArea} defaultValue={TasksStorage.task.body} onChange={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                </form>
                <button className={notes.button_save} onClick={this.saveButton} >Сохранить</button>
            </div>

        );
    }
}


export default observer(EditTask);