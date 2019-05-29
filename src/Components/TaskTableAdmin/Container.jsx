import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
  updateTaskText,
  updateTaskStatus,
} from "../../Redux/Actions/tasks_actions";
import TaskTableAdmin from "./TaskTableAdmin";
import TaskTable from "../TaskTable/TaskTable";


class TaskTableAdminContainer extends React.Component {
  componentDidMount() {
    let currentPage = this.props.currentPage
    this.props.toggleIsFetching(true);
    axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.updateTotalTaskCount(response.data.message.total_task_count)
        this.props.setTasks(response.data.message.tasks)
      });
  }

  onSortTable = (event) => {
    let sortField = event.target.id;
    let firstActiveTh = document.getElementsByClassName("active_col")[0];

    firstActiveTh && firstActiveTh.classList.remove("active_col");
    document.getElementById(sortField).classList.add("active_col");

    this.props.tableSort(sortField);
  }

  render() {
    return <TaskTableAdmin
      sortDirection     = {this.props.sortDirection}
      sortField         = {this.props.sortField}
      tableSort         = {this.props.tableSort}
      tasks             = {this.props.tasks}
      isFetching        = {this.props.isFetching}
      onSortTable       = {this.onSortTable}
      tableHeaders      = {this.props.table_headers}
      login             = {this.props.login}
      updateTaskStatus  = {this.props.updateTaskStatus}
      updateTaskText    = {this.props.updateTaskText}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    tasks:          state.tasks.message.tasks,
    table_headers:  state.tasks.table_headers,
    sortField:      state.tasks.sortField,
    sortDirection:  state.tasks.sortDirection,
    isFetching:     state.tasks.isFetching,
    currentPage:    state.tasks.currentPage,
    tasksCountAll:  state.tasks.message.total_task_count,
    newTaskText:    state.tasks.newTaskText,
    login:          state.users.loggedUser,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
  updateTaskText,
  updateTaskStatus,
})(TaskTableAdminContainer);;