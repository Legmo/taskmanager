import {createStore, applyMiddleware} from "redux";
import reducers from './Reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;