import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  setTasks,
  toggleIsFetching,
} from "../../Redux/Actions/tasks_actions";
import TaskTable from "./TaskTable";
import * as axios from "axios";

class TaskTableContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=1')
    .then(response => {
      this.props.toggleIsFetching(false);
      this.props.setTasks(response.data.message.tasks)
    });
  }

  render() {
    return (
      <>
        <TaskTable
          sortDirection = {this.props.sortDirection}
          tableSort     = {this.props.tableSort}
          tasks         = {this.props.tasks}
          isFetching    = {this.props.isFetching}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    tasks:          state.tasks.message.tasks,
    table_headers:  state.tasks.table_headers,
    sortField:      state.tasks.sortField,
    sortDirection:  state.tasks.sortDirection,
    isFetching:     state.tasks.isFetching
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  setTasks,
  toggleIsFetching
})(TaskTableContainer);