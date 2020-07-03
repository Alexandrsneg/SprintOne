import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";

class TasksStorage {

    tasksData = {
        tasks : [],
        count : 0
    }

    task = {
        id : null,
        title : "",
        body : ""
    }


    setTitle = (title) => {
        this.task.title = title
    }


    setBody= (body) => {
        this.task.body = body
    }

    //записываем таски с сервера в объект таскДата
    setTasks = (tasks) =>{
        this.tasksData.tasks = tasks
        this.tasksData.count = this.tasksData.tasks.length
    }


    //получаем все имеющиеся таски с сервера
    getTasks = () => {
        ApiService({
            url : "/tasks",
            method: "GET"
        }).then(response => this.setTasks(response))
    }

   //добавлчем новую таску на сервер получаем все + новая
    addTask = () =>{
        ApiService({
            url: "/tasks",
            method: "POST",
            body: this.task
        }).then(response => this.getTasks())
    }


    //редактируем таску по айди
    editTask= (id) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: this.task
        }).then(response => console.log(response))
    }

    //меняем статус по айди
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
        }).then(response => this.getTasks())
    }


}

    decorate(TasksStorage, {
        tasksData: observable,
        task: observable,
        setTitle: action,
        setBody: action,
        setTasks: action,
        getTasks: action,
        addTask: action,
        editTask: action,
        changeStatusOfTask: action,
        deleteTask: action
    })

const tasksStorage = new TasksStorage();

export default tasksStorage;