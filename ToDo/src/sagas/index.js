import { watchLoadTodo } from './toDoSaga'

export default function registerSaga(sagaMiddleWare) {
   sagaMiddleWare.run(watchLoadTodo)
}