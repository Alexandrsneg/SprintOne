import {action, decorate, observable} from "mobx";
import {ApiService} from "../rest/apiService";

class TasksStorage {

    tasksData = {
        tasks : []
    }

    task = {
        id : null,
        title : "",
        body : ""
    }

    flagForButton

    setTitle = (title) => {
        this.task.title = title
    }


    setBody= (body) => {
        this.task.body = body
    }

    //записываем таски с сервера в объект таскДата
    setTasks = (tasks) =>{
        this.tasksData.tasks = tasks
    }

    setTask = (task) =>{
        this.task = task
    }

    changeButton = (flag) =>{
        this.flagForButton = !flag
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
        }).then(response => this.getTasks())
    }

    //меняем статус по айди
    changeStatusOfTask= (id, flag) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: {"done" : !flag}
        }).then(response => this.changeButton(response))
    }


    deleteTask = (id) => {
        ApiService({
            url : `/tasks/${id}`,
            method : "DELETE"
        }).then(response => this.getTasks())
    }

    //получаем таску по айди
    getTaskById= (id) =>{
        ApiService({
            url: `/tasks/${id}`,
            method: "GET"
        }).then(response => this.setTask(response))
    }


}

    decorate(TasksStorage, {
        tasksData: observable,
        task: observable,
        flagForButton: observable,
        setTitle: action,
        setBody: action,
        setTasks: action,
        getTasks: action,
        addTask: action,
        editTask: action,
        changeStatusOfTask: action,
        deleteTask: action,
        getTaskById: action
    })

const tasksStorage = new TasksStorage();

export default tasksStorage;