import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {
  tableSort,
  updateTaskText,
  updateTaskStatus,
  toggleIsFetching,
  updateTotalTaskCount,
  setTasks,
} from "../../Redux/Actions/tasks_actions";
import TaskTableAdmin from "./TaskTableAdmin";


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

  render() {
    return <TaskTableAdmin
        login             = {this.props.login}
        sortDirection     = {this.props.sortDirection}
        tableSort         = {this.props.tableSort}
        tasks             = {this.props.tasks}
        updateTaskStatus  = {this.props.updateTaskStatus}
        updateTaskText    = {this.props.updateTaskText}
        isFetching        = {this.props.isFetching}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    login:          state.users.loggedUser,
    tasks:          state.tasks.message.tasks,
    newTaskText:    state.tasks.newTaskText,
    tableHeaders:   state.tasks.table_headers,
    sortDirection:  state.tasks.sortDirection,
    sortField:      state.tasks.sortField,
    isFetching:     state.tasks.isFetching,
    currentPage:    state.tasks.currentPage,
    tasksCountAll:  state.tasks.message.total_task_count,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  updateTaskText,
  updateTaskStatus,
  toggleIsFetching,
  updateTotalTaskCount,
  setTasks,
})(TaskTableAdminContainer);;