import React from 'react';

class AddTaskForm extends React.Component {

  onTaskTextChange = (event) => {
    let text = event.target.value;
    let id =  event.target.id;
    this.props.updateNewTaskText(text, id);
  }

  onNameChange = (event) => {
    let name = event.target.value;
    this.props.updateAuthorText(name);
  }

  onMailChange = (event) => {
    let mail = event.target.value;
    this.props.updateMailText(mail);
  }

  addNewTask = (event) => {
    event.preventDefault();
    this.props.addTask();
    // var textarea = event.target.getElementsByTagName('textarea');

    //textareaValue
    event.target.elements.taskText.value = '';
    event.target.elements.author_name.value = '';
    event.target.elements.email.value = '';

    alert('Задача отправлена');
  }

  render() {
    return (
        <div>
          <form onSubmit={this.addNewTask}>
            <div className="form-group">
            <textarea
                onClick={this.onTaskTextChange}
                onChange={this.onTaskTextChange}
                rows="7"
                id="task_text"
                name="taskText"
                className="form-control"
                placeholder="Текст задачи"
                required></textarea>
            </div>
            <div className="form-group">
              <input
                  onChange={this.onNameChange}
                  type="text"
                  id="author_name"
                  name="author_name"
                  className="form-control"
                  placeholder="Ваше имя"
                  required/>
            </div>
            <div className="form-group">
              <input
                  onChange={this.onMailChange}
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required/>
            </div>
            <button
                type="submit"
                className="btn btn-primary">Отправить задачу
            </button>
          </form>
        </div>
    )
  }
}


export default AddTaskForm;