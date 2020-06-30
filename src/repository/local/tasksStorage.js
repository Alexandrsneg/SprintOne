import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";

class TasksStorage {

    tasksData = {
        tasks : [],
        id : 0
    }

    task = {
        title : "",
        body : ""
    }


    setTitle = (title) => {
        this.task.title = title
    }


    setBody= (body) => {
        this.task.body = body
    }



    addTask= () =>{
        ApiService({
            url: "/tasks",
            method: "POST",
            body: this.task
        }).then(response => console.log(response))
    }

    editTask= (id) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: this.task
        }).then(response => console.log(response))
    }

    changeStatusOfTask= (id, flag) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: {"done" : !flag}
        }).then(response => console.log(response))
    }

    deleteTask = (id) => {
        ApiService({
            url : `/tasks/${id}`,
            method : "DELETE"
        }).then(response => console.log(response))
    }




}

    decorate(TasksStorage, {
        tasksData: observable,
        task: observable,
        setTitle: action,
        setBody: action
    })

const tasksStorage = new TasksStorage();

export default tasksStorage;