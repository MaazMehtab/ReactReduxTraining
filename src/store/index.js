import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/reducers/rootReducer";
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../store/sagas/rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run the saga
sagaMiddleware.run(rootSaga);

export default store;