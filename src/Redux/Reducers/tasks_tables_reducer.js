import {IS_PAGINATION} from '../Actions/tasks_table_actions'

const initialState = {
    actualPage: 1,
};

const task_tables_reducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_PAGINATION: {
      return {...state};
    }
    default:
      return state;
  }
}

export default task_tables_reducer;