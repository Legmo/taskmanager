import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  setTasks,
} from "../../Redux/Actions/tasks_actions";
import TaskTable from "./TaskTable";


let mapStateToProps = (state) => {
  return {
    isLoading:      state.tasks.isLoading,
    tasks:          state.tasks.message.tasks,
    table_headers:  state.tasks.table_headers,
    sortField:      state.tasks.sortField,
    sortDirection:  state.tasks.sortDirection
  }
}

const TaskTableContainer = connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  setTasks
})(TaskTable);

export default TaskTableContainer;