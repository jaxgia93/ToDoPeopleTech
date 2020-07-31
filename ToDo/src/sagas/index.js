import { watchLoadTodo,watchDoLogin,watchdoRegistration } from './toDoSaga'

export default function registerSaga(sagaMiddleWare) {
   sagaMiddleWare.run(watchLoadTodo)
   sagaMiddleWare.run(watchDoLogin)
   sagaMiddleWare.run(watchdoRegistration)

}