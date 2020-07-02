import React from "react";
import TasksStorage from "../../repository/local/tasksStorage";
import notes from "../../styles/notes.module.css";

class CreateNewTask extends React.Component{

    //флаг на изменения заметки
    changes;


    //защита от закрытия без сохранения изменений в заметке
    safetyClose = () =>{
        if (this.changes) {
            if(window.confirm("Вы не сохранили заметку, выйти?")){
                return window.location.href="/notes"
            } else {
                console.log("mes")
            }
        } else {
            return window.location.href="/notes"
        }
    }

    addTaskButton = () =>{
        //запрос на сервер на редактирование заметки
        TasksStorage.addTask()
        return window.location.href="/notes"
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

    render() {
        console.log(this.props.match.params)
        return (
            <div>
                <h1>Создание новой заметки</h1>
                <form className={notes.forms}>
                    <input className={notes.inputs} defaultValue={TasksStorage.task.title} onChange={this.onTitleChangeHandler} placeholder="Title"/>
                    <div className={notes.button_close}  onClick={ this.safetyClose}>X</div>
                    <textarea className={notes.textArea} defaultValue={TasksStorage.task.body} onChange={this.onBodyChangeHandler}  placeholder="Напишите заметку сюда"/>
                </form>
                <button className={notes.button_save} onClick={this.addTaskButton} >Добавить</button>
            </div>

        );
    }
}


export default CreateNewTask;