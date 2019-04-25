import React from 'react';
import style from './style.module.css'
import {Redirect} from 'react-router-dom'
import Paginator_Container from "../Paginator/Container";
// import {CheckboxToggle, CheckboxChecked} from "../Checkbox"

const TaskTableAdmin = (props) => {

  let isLoggedUser = props.login;
  let sortDirection = props.sortDirection;

  let onSortTable = (event) => {
    let sortField = event.target.id;

    //Table sorting - add/change indicator
    let firstActiveTh = document.getElementsByClassName("active_col")[0];
    if (firstActiveTh) {firstActiveTh.classList.remove("active_col");}
    document.getElementById(sortField).classList.add("active_col");

    props.sortTable(sortField);
  }

  let onStatusChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    let id = (event.target.id).replace('exampleRadios', '');
    let status = 0;

    if (checkbox.hasAttribute('checked')) {
      (event.target).removeAttribute ("checked");
    } else {
      (event.target).setAttribute("checked","checked");
      status = 10;
    }

    props.updateTaskStatus(status, id);
  }

  let onTaskTextChange = (event) => {
    let text = event.target.value;
    let id =  event.target.id;
    props.updateTaskText(text, id);

    //после первого изменения отобразить кнопку «Сохранить»
    // let button = document.getElementById(event.target.id);
  }

  const tableElements = props.tasks.map((props) => {
    let status_check =  (props.status !== 0) ? "checked" : ""; //todo - KISS
    let status_color =  (props.status !== 0) ? "success" : "danger"; //todo - KISS
    let status_text  =  (props.status !== 0) ? "решено"  : "открыто"; //todo - KISS

    // let status_cheсk =  (props.status != 0) ? true : false; //todo - KISS
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
      <tr className={style.table_row} key={props.id}>
        <th scope="row">{props.id}</th>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>
          <textarea
              value={props.text}
              onChange={onTaskTextChange}
              id={props.id}
              className="d-block mb-2"
          />
          <button type="submit" className="d-none btn btn-primary">Сохранить</button>
        </td>
        <td className={'text-'+status_color}>
          <div className="form-check">
            {/*{checkbox}*/}
            <input
              className="form-check-input"
              type="checkbox"
              name="exampleRadios"
              id={"exampleRadios" + props.id}
              value={"option" + props.id}
              checked={status_check}
              onChange={onStatusChange}
            />
            <label className="form-check-label" htmlFor={"exampleRadios" + props.id}>{status_text}</label>
          </div>
        </td>
      </tr>
    )
  })

  if (isLoggedUser) {
    return (
        <div>
          <form>
            <table className={"table sort_"+sortDirection}>
              <thead className="thead-light">
              <tr>
                {/*{tableHeaders}*/}
                <th onClick={onSortTable} id="id">
                  ID
                  <span className="indicator"></span>
                </th>
                <th onClick={onSortTable} id="username">
                  Пользователь
                  <span className="indicator"></span>
                </th>
                <th onClick={onSortTable} id="email">
                  Email
                  <span className="indicator"></span>
                </th>
                <th onClick={onSortTable} id="text">
                  Задача
                  <span className="indicator"></span>
                </th>
                <th onClick={onSortTable} id="status">
                  Статус
                  <span className="indicator"></span>
                </th>
              </tr>
              </thead>
              <tbody>
                {tableElements}
              </tbody>
            </table>
          </form>
          <Paginator_Container/>
        </div>
    )
  }
  else {
    // return <Redirect to='/index'/>
    return (
      <div>
        <p className="text-center text-danger">Страница доступна только для авторизованных пользователей.</p>
      </div>
    )
  }
}

export default TaskTableAdmin;