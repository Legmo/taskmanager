import React from 'react';
import {connect} from "react-redux";
import AddTaskForm from "./AddTaskForm";
import {
  addTask,
  updateNewTaskText,
  updateMailText,
  updateAuthorText } from "../../Redux/Actions/tasks_actions";

let mapStateToProps = (state) => {
  return {
    tasks:  state.tasks.message.tasks,
    newTaskText: state.tasks.newTaskText,
    newMailText: state.tasks.newMailText,
    newAuthorText: state.tasks.newAuthorText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => {dispatch(addTask())},
    updateNewTaskText: (text, id) => {dispatch(updateNewTaskText(text))},
    updateMailText: (mail) => {dispatch(updateMailText(mail))},
    updateAuthorText: (name) => {dispatch(updateAuthorText(name))},
  }
}

const AddTaskForm_Container = connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);

export default AddTaskForm_Container;