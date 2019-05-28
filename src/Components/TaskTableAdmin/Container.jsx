import React from 'react';
import {connect} from "react-redux";
import TaskTableAdmin from "./TaskTableAdmin";
import {
  tableSort,
  updateTaskText,
  updateTaskStatus,
  setTasks,
  toggleIsFetching,
} from "../../Redux/Actions/tasks_actions";
import * as axios from "axios";
import TaskTable from "../TaskTable/TaskTable";


class TaskTableAdminContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=1')
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setTasks(response.data.message.tasks)
        });
    this.props.tasks.isFetching = false;
  }
  render() {
      return (
          <TaskTableAdmin
              login             = {this.props.login}
              sortDirection     = {this.props.sortDirection}
              tableSort         = {this.props.tableSort}
              updateTaskStatus  = {this.props.updateTaskStatus}
              updateTaskText    = {this.props.updateTaskText}
              tasks             = {this.props.tasks}
              isFetching        = {this.props.isFetching}
          />
      )
  }
}

let mapStateToProps = (state) => {
  return {
    login:          state.users.loggedUser,
    tasks:          state.tasks.message.tasks,
    newTaskText:    state.tasks.newTaskText,
    tableHeaders:   state.tasks.table_headers,
    sortField:      state.tasks.sortField,
    sortDirection:  state.tasks.sortDirection,
    isFetching:     state.tasks.isFetching
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  updateTaskText,
  updateTaskStatus,
  setTasks,
  toggleIsFetching
})(TaskTableAdminContainer);;