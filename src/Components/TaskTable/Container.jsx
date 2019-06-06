import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
} from "../../Redux/Actions/tasks_actions";
import TaskTable from "./TaskTable";
import {tasksAPI} from "../../API/api";


class TaskTableContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    tasksAPI.getTasksWithSort(this.props.currentPage, this.props.sortField, this.props.sortDirection)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.updateTotalTaskCount(data.message.total_task_count)
        this.props.setTasks(data.message.tasks)
      });
  }

  onSortTable = (event) => {
    let sortField = event.target.id;

    //TODO: KISS
    let firstActiveTh = document.getElementsByClassName("active_col")[0];
    firstActiveTh && firstActiveTh.classList.remove("active_col");
    document.getElementById(sortField).classList.add("active_col");

    //TODO: KISS
    let wasSortDirectionAsc = document.getElementById("table").classList.contains("sort_asc");
    let sortDirection;
    wasSortDirectionAsc ? sortDirection = "desc" : sortDirection = "asc";

    this.props.tableSort(sortField, sortDirection);

    //TODO: we need to use Flux here. Data from state only (this.props.sortField, this.props.sortDirection)
    this.props.toggleIsFetching(true);
    tasksAPI.getTasksWithSort(this.props.currentPage, sortField, sortDirection)
    // tasksAPI.getTasksWithSort(this.props.currentPage, this.props.sortField, this.props.sortDirection)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.updateTotalTaskCount(data.message.total_task_count)
        this.props.setTasks(data.message.tasks)
      });
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
    currentPage:    state.tasks.currentPage,
    tasksCountAll:  state.tasks.message.total_task_count,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
})(TaskTableContainer);