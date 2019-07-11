import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
});

export default reducers;
