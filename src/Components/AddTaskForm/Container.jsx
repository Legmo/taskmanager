import React from 'react';
import {connect} from "react-redux";
import AddTaskForm from "./AddTaskForm";
import {
  clearNewTask,
  toggleIsFetching,
  updateNewTaskText,
  updateMailText,
  updateAuthorText,
  postNewTask,
} from "../../Redux/Actions/tasks_actions";
import * as axios from "axios";


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
    let username = this.props.newAuthorText
    let email    = this.props.newMailText
    let text     = this.props.newTaskText

    this.props.postNewTask([username, email, text])

    if(!this.props.errorStatus) {
      this.props.clearNewTask()
      alert('Задача отправлена')
      event.target.elements.taskText.value = '';
      event.target.elements.taskAuthor.value = '';
      event.target.elements.taskMail.value = '';
    }
    else {
      alert('Ошибка отправки. Свяжитесь с администратором')
    }
  }

  render() {
    return <AddTaskForm
        onNewTaskTextChange = {this.onNewTaskTextChange }
        onAuthorChange      = {this.onAuthorChange}
        onMailChange        = {this.onMailChange}
        newTaskSubmit       = {this.newTaskSubmit}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    newTaskText:    state.tasks.newTask.text,
    newAuthorText:  state.tasks.newTask.author,
    newMailText:    state.tasks.newTask.mail,
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  clearNewTask,
  updateNewTaskText,
  updateMailText,
  updateAuthorText,
  toggleIsFetching,
  postNewTask,
})(AddTaskFormContainer);

