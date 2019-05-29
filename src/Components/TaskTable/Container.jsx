import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
} from "../../Redux/Actions/tasks_actions";
import TaskTable from "./TaskTable";


class TaskTableContainer extends React.Component {
  componentDidMount() {
    let currentPage   = this.props.currentPage
    let sortField     = this.props.sortField
    let sortDirection = this.props.sortDirection

    this.props.toggleIsFetching(true);
    axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`)
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
    return <TaskTable
      sortDirection = {this.props.sortDirection}
      sortField     = {this.props.sortField}
      tableSort     = {this.props.tableSort}
      tasks         = {this.props.tasks}
      isFetching    = {this.props.isFetching}
      onSortTable   = {this.onSortTable}
      tableHeaders  = {this.props.table_headers}
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
    currentPage:     state.tasks.currentPage,
    tasksCountAll:  state.tasks.message.total_task_count,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
})(TaskTableContainer);