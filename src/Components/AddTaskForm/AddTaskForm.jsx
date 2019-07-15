import React from 'react';
import style from './style.module.css';

const AddTaskForm = (props) => {
  const { onNewTaskTextChange } = props;
  const { onAuthorChange }      = props;
  const { onMailChange }        = props;
  const { newTaskSubmit }       = props;

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <form onSubmit={newTaskSubmit}>
          <div className="form-group">
            <textarea
              onChange={onNewTaskTextChange}
              rows="7"
              id="taskText"
              name="taskText"
              className={`${style.textarea} form-control`}
              placeholder="Текст задачи"
              required
              // autoFocus="autoFocus"
            >
              &nbsp;
            </textarea>
          </div>
          <div className="form-group">
            <input
              onChange={onAuthorChange}
              type="text"
              id="taskAuthor"
              name="taskAuthor"
              className="form-control"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={onMailChange}
              type="email"
              id="taskMail"
              name="taskMail"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Отправить задачу
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
