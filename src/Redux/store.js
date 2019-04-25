import {combineReducers, createStore} from "redux";
import reducers from './Reducers';

let browserDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
    reducers,
    browserDevTools
);

export default store;