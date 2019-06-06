import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  setTasks,
  toggleIsFetching,
  updateTotalTaskCount,
  updateTaskText,
  updateTaskStatus,
} from "../../Redux/Actions/tasks_actions";
import TaskTableAdmin from "./TaskTableAdmin";
import {tasksAPI} from "../../API/api";


class TaskTableAdminContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    tasksAPI.getTasksWithSort(this.props.currentPage)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.updateTotalTaskCount(data.message.total_task_count)
        this.props.setTasks(data.message.tasks)
      });
  }

  onSortTable = (event) => {
    let sortField = event.target.id;
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

  onStatusChange = (event) => {
    let id = (event.target.id).replace('exampleRadios', '');
    let isChecked = document.getElementById(event.target.id).hasAttribute('checked');
    let status;

    if(isChecked) {
      status = 0;
      (event.target).removeAttribute ("checked")
    } else {
      status = 10;
      (event.target).setAttribute("checked","checked")
    }

    this.props.toggleIsFetching(true);
    tasksAPI.postTaskChanges([id,status,,])
      .then(response => {
        this.props.toggleIsFetching(false);
      });

    this.props.updateTaskStatus(status, id);
  }

  onTextChangeLocal = (event) => {
    let text = event.target.value;
    let id   = event.target.id;

    let button = event.target.nextElementSibling;
    button.classList.remove("d-none")

    this.props.updateTaskText(text, id);
  }

  taskTextSend = (event) => {
    let id   = +event.target.previousElementSibling.id;
    let text = "";
    let button = event.target;

    this.props.tasks.map((task) => (id === task.id) ? text = task.text : "")

    this.props.toggleIsFetching(true);
    tasksAPI.postTaskChanges([id,,text])
      .then(response => {
        this.props.toggleIsFetching(false);
      });

    button.classList.add("d-none");
  }

  render() {
    return <TaskTableAdmin
      sortDirection     = {this.props.sortDirection}
      sortField         = {this.props.sortField}
      tableSort         = {this.props.tableSort}
      tasks             = {this.props.tasks}
      isFetching        = {this.props.isFetching}
      onSortTable       = {this.onSortTable}
      onStatusChange    = {this.onStatusChange}
      onTextChangeLocal = {this.onTextChangeLocal}
      taskTextSend      = {this.taskTextSend}
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