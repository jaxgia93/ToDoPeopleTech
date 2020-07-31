import { takeEvery, put } from 'redux-saga/effects';
import * as ActionType from '../actions/toDoActions'
import React from 'react'
import * as utils from '../utils'
import { AsyncStorage } from "react-native"


export function* registrationUser(action) {

  if (utils.storeData(action.payload.user.email, action.payload.user)) {
    yield put({
      type: ActionType.SET_USER,
      payload: { user: action.payload.user }
    })
  }

  else alert("Utente già registrato")
}

export function* LoadToDo(action){




}

export function* doLogin(action) {
  const { email, password } = action.payload.user

  try {
    let value = yield AsyncStorage.getItem(email)
    value = JSON.parse(value)

    if (value !== null) {
      if (password === value.password) {
        yield put({
          type: ActionType.SET_USER,
          payload: { user: value }
        })
        console.log(value.toDo[0])










      }
      else alert("Password sbagliata")
    }
    else alert("L'utente non esiste")
  }
  catch (err) {
    console.log(err)
  }
}



export function* watchdoRegistration() {
  yield takeEvery(ActionType.REGISTRATION_SAGA, registrationUser);
}

export function* watchLoadTodo() {
  yield takeEvery(ActionType.LOAD_TODO, LoadToDo);

}

export function* watchDoLogin() {
  yield takeEvery(ActionType.DO_LOGIN_SAGA, doLogin);
}
