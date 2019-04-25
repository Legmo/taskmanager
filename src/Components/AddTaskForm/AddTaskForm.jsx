import React from 'react';

const AddTaskForm = (props) => {

  let onTaskTextChange = (event) => {
    let text = event.target.value;
    let id =  event.target.id;
    props.updateNewTaskText(text, id);
  }

  let onNameChange = (event) => {
    let name = event.target.value;
    props.updateAuthorText(name);
  }

  let onMailChange = (event) => {
    let mail = event.target.value;
    props.updateMailText(mail);
  }

  let addNewTask = (event) => {
    event.preventDefault();
    props.addTask();
    // var textarea = event.target.getElementsByTagName('textarea');

    //textareaValue
    event.target.elements.taskText.value = '';
    event.target.elements.author_name.value = '';
    event.target.elements.email.value = '';

    alert('Задача отправлена');
  }

  return (
      <div>
        <form onSubmit={addNewTask}>
          <div className="form-group">
            <textarea
                onClick={onTaskTextChange}
                onChange={onTaskTextChange}
                rows="7"
                id="task_text"
                name="taskText"
                className="form-control"
                placeholder="Текст задачи"
                required></textarea>
          </div>
          <div className="form-group">
            <input
                onChange={onNameChange}
                type="text"
                id="author_name"
                name="author_name"
                className="form-control"
                placeholder="Ваше имя"
                required />
          </div>
          <div className="form-group">
            <input
                onChange={onMailChange}
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required />
          </div>
          <button
              type="submit"
              className="btn btn-primary">Отправить задачу</button>
        </form>
      </div>
  )
}


export default AddTaskForm;