import React from 'react';
import * as axios from "axios";
import Paginator_Container from "../Paginator/Container";
import style from './style.module.css'

const TaskTable = (props) => {
  console.log(props);

  //TODO: side effect. We need to use class component here
  if (props.tasks.length < 3) {
    axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=15')
    .then(response => {
      // debugger
      // let tasks;
      props.setTasks(response.data.message.tasks)
    });
    console.log('after axios')
  }

  let sortDirection = props.sortDirection;
  // console.log(props);

  let onSortTable = (event) => {
    let sortField = event.target.id;

    //Table sorting - add/change indicator
    var firstActiveTh = document.getElementsByClassName("active_col")[0];
    if (firstActiveTh) {firstActiveTh.classList.remove("active_col");}
    document.getElementById(sortField).classList.add("active_col");

    // console.log(sortField);
    props.sortTable(sortField);
  }

  const tableElements = props.tasks.map((props) => {

    let status_text =  (props.status != 0) ? "решено" : "открыто"
    let status_color =  (props.status != 0) ? "success" : "danger" //todo - KISS

    return (
        <tr className={style.table_row} key={props.id}>
          <th scope="row">{props.id}</th>
          <td>{props.username}</td>
          <td>{props.email}</td>
          <td>{props.text}</td>
          <td className={'text-'+status_color}>{status_text}</td>
        </tr>
    )
  })

  return (
      <div>
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
        <Paginator_Container/>
      </div>
  )
}

export default TaskTable;