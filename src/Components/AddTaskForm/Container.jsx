import React from 'react';
import { connect } from 'react-redux';
import AddTaskForm from './AddTaskForm';
import {
  clearNewTask,
  toggleIsFetching,
  updateNewTaskText,
  updateMailText,
  updateAuthorText,
  postNewTask,
} from '../../Redux/Actions/tasksActions';

class AddTaskFormContainer extends React.Component {
  onNewTaskTextChange = (event) => {
    const text = event.target.value;
    this.props.updateNewTaskText(text);
  };

  onAuthorChange = (event) => {
    const name = event.target.value;
    this.props.updateAuthorText(name);
  };

  onMailChange = (event) => {
    const mail = event.target.value;
    this.props.updateMailText(mail);
  };

  newTaskSubmit = (event) => {
    event.preventDefault();
    const { newAuthorText: username } = this.props;
    const { newMailText: email }      = this.props;
    const { newTaskText: text }       = this.props;
    const { errorStatus }             = this.props;

    this.props.postNewTask([username, email, text]);

    if (!errorStatus) {
      this.props.clearNewTask();
      alert('Задача отправлена'); // eslint-disable-line no-alert
      event.target.elements.taskText.value = '';
      event.target.elements.taskAuthor.value = '';
      event.target.elements.taskMail.value = '';
    } else {
      alert('Ошибка отправки. Свяжитесь с администратором'); // eslint-disable-line no-alert
    }
  };

  render() {
    return (
      <AddTaskForm
        onNewTaskTextChange = {this.onNewTaskTextChange}
        onAuthorChange      = {this.onAuthorChange}
        onMailChange        = {this.onMailChange}
        newTaskSubmit       = {this.newTaskSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  newTaskText:   state.tasks.newTask.text,
  newAuthorText: state.tasks.newTask.author,
  newMailText:   state.tasks.newTask.mail,
});

export default connect(mapStateToProps, {// mapDispatchToProps
  clearNewTask,
  updateNewTaskText,
  updateMailText,
  updateAuthorText,
  toggleIsFetching,
  postNewTask,
})(AddTaskFormContainer);
