import React from 'react';

const AddTaskForm = (props) => {
  let onNewTaskTextChange = props.onNewTaskTextChange
  let onAuthorChange      = props.onAuthorChange
  let onMailChange        = props.onMailChange
  let newTaskSubmit       = props.newTaskSubmit

  return (
      <div>
        <form onSubmit={newTaskSubmit}>
          <div className="form-group">
          <textarea onChange={onNewTaskTextChange}
              rows="7"
              id="taskText"
              name="taskText"
              className="form-control"
              placeholder="Текст задачи"
              required="on"
              autoFocus="on" />
          </div>
          <div className="form-group">
            <input
                onChange={onAuthorChange}
                type="text"
                id="taskAuthor"
                name="taskAuthor"
                className="form-control"
                placeholder="Ваше имя"
                required/>
          </div>
          <div className="form-group">
            <input
                onChange={onMailChange}
                type="email"
                id="taskMail"
                name="taskMail"
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

export default AddTaskForm;