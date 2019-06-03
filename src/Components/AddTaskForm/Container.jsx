import React from 'react';
import {connect} from "react-redux";
import AddTaskForm from "./AddTaskForm";
import {
  addTask,
  clearNewTask,
  toggleIsFetching,
  updateNewTaskText,
  updateMailText,
  updateAuthorText } from "../../Redux/Actions/tasks_actions";
import * as axios from "axios";
import TaskTableAdmin from "../TaskTableAdmin/TaskTableAdmin";


class AddTaskFormContainer extends React.Component {
  onNewTaskTextChange = (event) => {
    let text = event.target.value;
    this.props.updateNewTaskText(text);
  }

  onAuthorChange = (event) => {
    let name = event.target.value;
    this.props.updateAuthorText(name);
  }

  onMailChange = (event) => {
    let mail = event.target.value;
    this.props.updateMailText(mail);
  }

  newTaskSubmit = (event) => {
    event.preventDefault();
    let url = `https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name`;
    let params = new FormData();
    params.append("username", this.props.newAuthorText);
    params.append("email", this.props.newMailText);
    params.append("text", this.props.newTaskText);

/*

    for (var pair of params.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }
*/

    this.props.toggleIsFetching(true);

    axios.post(url, params)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.clearNewTask();

        console.log(response);
        alert('Задача отправлена');
      });

    event.target.elements.taskText.value = '';
    event.target.elements.taskAuthor.value = '';
    event.target.elements.taskMail.value = '';

  }

  render() {
    return <AddTaskForm
        // tasks               = {this.props.tasks}
        // isFetching          = {this.props.isFetching}
        // newTaskText         = {this.props.newTaskText}
        // newMailText         = {this.props.newMailText}
        // newAuthorText       = {this.props.newAuthorText}
        // addTask             = {this.props.addTask}
        // updateNewTaskText   = {this.props.updateNewTaskText}
        // updateMailText      = {this.props.updateMailText}
        // updateAuthorText    = {this.props.updateAuthorText}
        onNewTaskTextChange = {this.onNewTaskTextChange }
        onAuthorChange      = {this.onAuthorChange}
        onMailChange        = {this.onMailChange}
        newTaskSubmit       = {this.newTaskSubmit}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    // tasks:          state.tasks.message.tasks,
    newTaskText:    state.tasks.newTask.text,
    newAuthorText:  state.tasks.newTask.author,
    newMailText:    state.tasks.newTask.mail,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  addTask,
  clearNewTask,
  updateNewTaskText,
  updateMailText,
  updateAuthorText,
  toggleIsFetching,
})(AddTaskFormContainer);

