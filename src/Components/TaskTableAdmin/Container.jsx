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

    this.props.tableSort(sortField);
  }

  onStatusChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    let id = (event.target.id).replace('exampleRadios', '');
    let status = 0;

    this.props.toggleIsFetching(true);

    /*
        var form = new FormData();
        form.append("username", "Example");
        form.append("email", "example@example.com");
        form.append("text", "Some text");

        $.ajax({
          url: 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Example',
          crossDomain: true,
          method: 'POST',
          mimeType: "multipart/form-data",
          contentType: false,
          processData: false,
          data: form,
          dataType: "json",
          success: function(data) {
            console.log(data);
          }
        });
    */

    /*
       axios({
          method: 'post',
          url: 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name',
          // url: 'https://postman-echo.com/post',
          data: {
              username: 'Alpha',
              email:    'alpha@test.ru',
              text:     'Alpha test task'
          }
        }).then(response => {
         console.log(response)
         this.props.toggleIsFetching(false);
         // this.props.setTasks(response.data.message.tasks)
       })
    */

    /*
        axios.post(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name`, {
              username: 'Alpha',
              email:    'alpha@test.ru',
              text:     'Alpha test task'
            })
            .then(response => {
              console.log(response)
              this.props.toggleIsFetching(false);
              // this.props.setTasks(response.data.message.tasks)
            })
            .catch(function (error) {
              alert(error);
            });;
    */

    if (checkbox.hasAttribute('checked')) {
      /*
         axios.post(`https://uxcandy.com/~shapoval/test-task-backend/edit/${id}?developer=Name&status=0&token=beejee&signature=b1d9ed7820ad045689322c918f68bbc5`)
          .then(response => {
            this.props.toggleIsFetching(false);
            // this.props.setTasks(response.data.message.tasks)
          });
       */

      this.props.toggleIsFetching(false);
      (event.target).removeAttribute ("checked");
    }
    else {
      this.props.toggleIsFetching(false);
      (event.target).setAttribute("checked","checked");
      status = 10;
    }

    this.props.updateTaskStatus(status, id);
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