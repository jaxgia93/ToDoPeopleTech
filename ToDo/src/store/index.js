import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from '../reducers'
import registerSaga from '../sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
//const mycompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
/*const composeEnhancers =
typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : compose;
  */
const store = createStore(

  rootReducer, {},
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  )
); 
registerSaga(sagaMiddleware);

export { store }
export default store