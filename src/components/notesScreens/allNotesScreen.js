import React from "react";
import TaskView from "./taskView";
import notes from "../../styles/notes.module.css";


const add = () => console.log("Добавить")

class AllNotesScreen extends React.Component{

    render() {
        return (
            <div>
                <h1>Экран заметок</h1>
                <TaskView done={false} id={1} />
                <button className={notes.button_add} onClick={add}>+</button>
             </div>
        );
    }
}


export default AllNotesScreen;