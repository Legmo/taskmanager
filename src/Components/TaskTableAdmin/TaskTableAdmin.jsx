import React from 'react';
import style from './style.module.css'
import PagerContainer from "../Helpers/Pager/Container";
import Preloader from "../Helpers/Preloader/Preloader";
// import {CheckboxToggle, CheckboxChecked} from "../Checkbox"

const TaskTableAdmin = (props) => {
  let sortFieldDefault  = props.sortField
  let sortDirection     = props.sortDirection;
  let onSortTable       = props.onSortTable
  let isFetching        = props.isFetching;
  let isLoggedUser      = props.login;

  const onStatusChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    let id = (event.target.id).replace('exampleRadios', '');
    let status = 0;

    if (checkbox.hasAttribute('checked')) {
      (event.target).removeAttribute ("checked");
    }
    else {
      (event.target).setAttribute("checked","checked");
      status = 10;
    }

    props.updateTaskStatus(status, id);
  }

  const onTaskTextChange = (event) => {
    let text = event.target.value;
    let id   = event.target.id;
    props.updateTaskText(text, id);
  }

  if(isLoggedUser) {
    if(isFetching) {
      return <Preloader />
    }
    return (
      <div>
        <form>
          <table className={"table sort_"+sortDirection}>
            <thead className="thead-light">
              <tr>
                {props.tableHeaders.map((h) => {
                  return (
                      <th onClick={onSortTable} id={h.header_id} className={sortFieldDefault === h.header_id ? "active_col" : ""}>
                        {h.header_name}
                        <span className="indicator"></span>
                      </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
            {props.tasks.map((task) => {
              let status_check = task.status !== 0 ? "checked" : "";
              let status_color = task.status !== 0 ? "success" : "danger";
              let status_text  = task.status !== 0 ? "решено" : "открыто";

              //Todo: разобраться с подключением чекбоксов
              // let status_cheсk = props.status !== 0 ? true : false;
              // let checkbox = "";
              // if(status_cheсk) {
              //   checkbox = <CheckboxChecked
              //       className="form-check-input"
              //       name="exampleRadios"
              //       id={"exampleRadios" + props.id}
              //       value={"option" + props.id}
              //       // onChange={onStatusChange}
              //       onChange={onStatusChange}
              //   />;
              // } else {
              //   checkbox = <CheckboxToggle
              //       toggle
              //       className="form-check-input"
              //       name="exampleRadios"
              //       id={"exampleRadios" + props.id}
              //       value={"option" + props.id}
              //       onChange={onStatusChange}
              //   />;
              // }

              return (
                <tr className={style.table_row} key={task.id}>
                  <th scope="row">{task.id}</th>
                  <td>{task.username}</td>
                  <td>{task.email}</td>
                  <td>
                  <textarea
                      value={task.text}
                      onChange={onTaskTextChange}
                      id={task.id}
                      className="d-block mb-2"
                  />
                    <button type="submit" className="d-none btn btn-primary">Сохранить</button>
                  </td>
                  <td className={'text-' + status_color}>
                    <div className="form-check">
                      {/*{checkbox}*/}
                      <input
                          className="form-check-input"
                          type="checkbox"
                          name="exampleRadios"
                          id={"exampleRadios" + task.id}
                          value={"option" + task.id}
                          checked={status_check}
                          onChange={onStatusChange}
                      />
                      <label className="form-check-label"
                             htmlFor={"exampleRadios" + task.id}>{status_text}</label>
                    </div>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </form>
        <PagerContainer/>
      </div>
    )
  }
  return(
    <div>
      <p className="text-center text-danger">Страница доступна только для авторизованных пользователей.</p>
    </div>
  )

}

export default TaskTableAdmin;