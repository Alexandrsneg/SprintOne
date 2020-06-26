const PORT = `3000`
const HOST = `http://127.0.0.1:${PORT}`
const API_URL = `${HOST}/api`


export const authUser = (email, password) => {
    const url = `${API_URL}/Users`
    fetch(url, {
        method : "POST",
        headers : {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body : JSON.stringify({
            email : email,
            password : password
        })
    }).then(response => {
        console.log(response.json())
    })
    //гугли про Promise
}

export const regUser = (email, password) => {
    const url = `${API_URL}/Users`
    fetch(url, {
        method : "POST",
        headers : {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body : JSON.stringify({
            email : email,
            password : password
        })
    }).then(response => {
        console.log(response.json())
    })
}