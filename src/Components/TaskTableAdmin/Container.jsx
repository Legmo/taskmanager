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
import StringEncodingToRFC3986 from "../Helpers/StringEncodingToRFC3986/StringEncodingToRFC3986";
const md5 = require('js-md5');


class TaskTableAdminContainer extends React.Component {
  componentDidMount() {
    let currentPage = this.props.currentPage
    let url         = `https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}`
    this.props.toggleIsFetching(true);
    axios.get(url)
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

    //TODO: KISS
    let wasSortDirectionAsc = document.getElementById("table").classList.contains("sort_asc");
    let sortDirection;
    wasSortDirectionAsc ? sortDirection = "desc" : sortDirection = "asc";

    this.props.tableSort(sortField, sortDirection);

    //TODO: (state, props) => ({counter: state.counter + props.increment})
    //let sortFieldState = this.props.sortField
    //let sortDirectionState = this.props.sortDirection

    //TODO: DRY
    let currentPage   = this.props.currentPage
    let url           = `https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`

    this.props.toggleIsFetching(true);
    axios.get(url)
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.updateTotalTaskCount(response.data.message.total_task_count)
          this.props.setTasks(response.data.message.tasks)
        });
  }

  taskChangePOST = ([id, status, text]) => {
    let token = "beejee";
    let url = `https://uxcandy.com/~shapoval/test-task-backend/edit/${id}/?developer=Name`;

    //ToDo: KISS
    let requestWithoutSignature="";
    if (typeof status !== "undefined") requestWithoutSignature = "status=" + StringEncodingToRFC3986(status) + "&";
    if (typeof text   !== "undefined") requestWithoutSignature = requestWithoutSignature + "text="  + StringEncodingToRFC3986(text) + "&";
    requestWithoutSignature = requestWithoutSignature + "token=" + StringEncodingToRFC3986(token);

    console.log(requestWithoutSignature)

    let params = new FormData();
    (typeof status !== "undefined") && params.append("status", status);
    (typeof text   !== "undefined") && params.append("text", text);
    params.append("token", token);
    params.append("signature", md5(requestWithoutSignature));

    for (var pair of params.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }

    this.props.toggleIsFetching(true);
    axios.post(url, params)
      .then(response => {
        this.props.toggleIsFetching(false);
        console.log(response.data);
      });
  }

  onStatusChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    let id = (event.target.id).replace('exampleRadios', '');

    let status;
    if (checkbox.hasAttribute('checked')) {
      status = 0;
      (event.target).removeAttribute ("checked");
    }
    else {
      status = 10;
      (event.target).setAttribute("checked","checked");
    }

    this.taskChangePOST([id,status,,]);
    this.props.updateTaskStatus(status, id);
  }

  onTaskTextChange = (event) => {
    let text = event.target.value;
    let id   = event.target.id;
    this.taskChangePOST([id,,text]);
    // this.onTaskTextPOST(event);
    this.props.updateTaskText(text, id);
  }

  //ToDo: in progress
  onTaskTextPOST = (event) => {
    let id   = event.target.id;
    let text = "";
    console.log(this.props.tasks)
    this.props.tasks.map((el) => (id === {el:id}) ? text = {el:text} : "")
    // console.log(`text: ${text}`)

    this.taskChangePOST([id,,text]);
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
      onTaskTextChange  = {this.onTaskTextChange}
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