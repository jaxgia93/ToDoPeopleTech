import { takeEvery} from 'redux-saga/effects';
import * as ActionType from '../actions/toDoActions'
import React from 'react'

export function* loadTodo() {
alert("caricamento")
}


export function* watchLoadTodo() {
    yield takeEvery(ActionType.ADD_TODO, loadTodo);
  }
  