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

let mapDispatchToProps = (dispatch) => {
  return {
    sortTable: (sortField) => {dispatch(tableSort(sortField))},
    updateTaskText: (text, id) => {dispatch(updateTaskText(text, id))},
    updateTaskStatus: (status, id) => {dispatch(updateTaskStatus(status, id))},
    setTasks: (tasks) => {dispatch(setTasks(tasks))}
  }
}

const TaskTableAdmin_Container = connect(mapStateToProps, mapDispatchToProps)(TaskTableAdmin);

export default TaskTableAdmin_Container;