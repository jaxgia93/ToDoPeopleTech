export const ADD_TODO = "ADD_TODO"

export const DO_LOGIN = "DO_LOGIN"
export const DO_LOGIN_SAGA = "DO_LOGIN_SAGA"
export const REGISTRATION_SAGA = "REGISTRATION_SAGA"
export const SET_USER = "SET_USER"
export const LOAD_TODO="LOAD_TODO"

export const registrationUser = (user) => ({
    type: REGISTRATION_SAGA,
    payload: { user }
})

export const doLogin = (user) => ({
    type: DO_LOGIN_SAGA,
    payload: { user }
})

export const LoadTodo = (id) => ({
    type:LOAD_TODO,
    payload:{id}
})

export const addToDo=(title)=>({
    type:ADD_TODO,
    payload:{title}
})