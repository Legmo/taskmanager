import React from 'react';
import {connect} from "react-redux";
import {
  tableSort,
  toggleIsFetching,
  updateTaskText,
  updateTaskStatus,
  getTasksWithSort,
  postTaskChanges,
} from "../../Redux/Actions/tasks_actions";
import ContainerFetching from "./ContainerFetching";


class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getTasksWithSort([this.props.currentPage,,])
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
    this.props.getTasksWithSort(this.props.currentPage, sortField, sortDirection)

  }

  onStatusChange = (event) => {
    let id = +(event.target.id).replace('exampleRadios', '');
    let isChecked = document.getElementById(event.target.id).hasAttribute('checked');
    let status;
    let taskIndex;

    if(isChecked) {
      status = 0;
      (event.target).removeAttribute ("checked")
    } else {
      status = 10;
      (event.target).setAttribute("checked","checked")
    }

    this.props.postTaskChanges([id,status,,])

    this.props.tasks.map((task, index) => {
     (+task.id === id) && (taskIndex = index);
    })

    this.props.updateTaskStatus(status, taskIndex);
  }

  onTextChangeLocal = (event) => {
    let text = event.target.value;
    let id   = +event.target.id;
    let taskIndex;

    let button = event.target.nextElementSibling;
    button.classList.remove("d-none")

    this.props.tasks.map((task, index) => {
      (+task.id === id) && (taskIndex = index);
    })

    this.props.updateTaskText(text, taskIndex);
  }

  taskTextSend = (event) => {
    let id   = +event.target.previousElementSibling.id;
    let text = "";
    let button = event.target;

    this.props.tasks.map((task) => (id === task.id) ? text = task.text : "")

    this.props.postTaskChanges([id,,text])
    this.props.toggleIsFetching(true)

    button.classList.add("d-none");
  }

  render() {
    return <ContainerFetching
      sortDirection     = {this.props.sortDirection}
      sortField         = {this.props.sortField}
      tableSort         = {this.props.tableSort}
      tasks             = {this.props.tasks}
      isFetching        = {this.props.isFetching}
      onSortTable       = {this.onSortTable}
      onStatusChange    = {this.onStatusChange}
      onTextChangeLocal = {this.onTextChangeLocal}
      taskTextSend      = {this.taskTextSend}
      tableHeaders      = {this.props.tableHeaders}
      tableCells        = {this.props.table_cells}
      login             = {this.props.login}
      updateTaskStatus  = {this.props.updateTaskStatus}
      updateTaskText    = {this.props.updateTaskText}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    tasks:          state.tasks.message.tasks,
    tableHeaders:   state.tasks.table.table_headers,
    tableCells:     state.tasks.table.table_cells,
    sortField:      state.tasks.table.sortField,
    sortDirection:  state.tasks.table.sortDirection,
    isFetching:     state.tasks.isFetching,
    currentPage:    state.tasks.currentPage,
    tasksCountAll:  state.tasks.message.total_task_count,
    newTaskText:    state.tasks.newTaskText,
    login:          state.users.loggedUser,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  tableSort,
  // setTasks,
  toggleIsFetching,
  //updateTotalTaskCount,
  updateTaskText,
  updateTaskStatus,
  getTasksWithSort,
  postTaskChanges,
})(TableContainer);