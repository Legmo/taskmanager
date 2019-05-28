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

const AddTaskFormContainer = connect(mapStateToProps, {//mapDispatchToProps
  addTask,
  updateNewTaskText,
  updateMailText,
  updateAuthorText
})(AddTaskForm);

export default AddTaskFormContainer;