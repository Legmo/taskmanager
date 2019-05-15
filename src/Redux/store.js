import {combineReducers, createStore, applyMiddleware} from "redux";
import reducers from './Reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let browserDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;