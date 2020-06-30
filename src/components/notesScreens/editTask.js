import React from "react";
import notes from "../../styles/notes.module.css";
import TasksStorage from "../../repository/local/tasksStorage";




class EditTask extends React.Component{

    render() {
        return (
            <div>
                <h1>Редактирование заметки</h1>
                <form className={notes.forms}>
                    <input className={notes.inputs} placeholder="Title"/>
                    <textarea className={notes.textArea} placeholder="Напишите заметку сюда"/>
                </form>
                <button className={notes.button_save} >Сохранить</button>
            </div>

        );
    }
}


export default EditTask;