import {combineReducers} from 'redux';
import tasks_reducer from './tasks_reducer';
import task_tables_reducer from './tasks_tables_reducer';
import users_reducer from './users_reducer';

let reducers  = combineReducers({
  users: users_reducer,
  tasks: tasks_reducer,
  tables: task_tables_reducer,
})

export default reducers;