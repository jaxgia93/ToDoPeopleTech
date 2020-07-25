import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers'
import registerSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const mycompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
const store = createStore(

  rootReducer, {},
  mycompose(
    applyMiddleware(
      sagaMiddleware,
    ),
  )
);
registerSaga(sagaMiddleware);

export { store }
export default store