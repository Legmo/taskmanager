import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  setTasks,
} from "../../Redux/Actions/tasks_actions";
import TaskTable from "./TaskTable";


let mapStateToProps = (state) => {
  return {
    tasks:  state.tasks.message.tasks, //TODO: разбираться с messages
    table_headers:  state.tasks.table_headers,
    sortField: state.tasks.sortField,
    sortDirection: state.tasks.sortDirection
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sortTable: (sortField) => {
      dispatch(tableSort(sortField))
    },
    setTasks: (tasks) => {
      dispatch(setTasks(tasks))
    }
  }
}

const TaskTableContainer = connect(mapStateToProps, mapDispatchToProps)(TaskTable);

export default TaskTableContainer;