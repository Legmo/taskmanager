import React from 'react';
import {connect} from "react-redux";
import TaskTableAdmin from "./TaskTableAdmin";
import {
  tableSort,
  updateTaskText,
  updateTaskStatus,
  setTasks
} from "../../Redux/Actions/tasks_actions";

let mapStateToProps = (state) => {
  return {
    login:  state.users.loggedUser,
    tasks:  state.tasks.message.tasks,
    newTaskText: state.tasks.newTaskText,
    tableHeaders:  state.tasks.table_headers,
    sortField: state.tasks.sortField,
    sortDirection: state.tasks.sortDirection
  }
}

const TaskTableAdmin_Container = connect(mapStateToProps,{//mapDispatchToProps
  tableSort,
  updateTaskText,
  updateTaskStatus,
  setTasks
})(TaskTableAdmin);

export default TaskTableAdmin_Container;