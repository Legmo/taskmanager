import React from 'react';
import PaginatorContainer from "../Paginator/Container";
import style from './style.module.css'
import Preloader from "../Helpers/Preloader/Preloader";

const TaskTable = (props) => {

  let sortDirection = props.sortDirection;
  let isFetching    = props.isFetching;

  const onSortTable = (event) => {
    let sortField = event.target.id;
    let firstActiveTh = document.getElementsByClassName("active_col")[0];
    firstActiveTh && firstActiveTh.classList.remove("active_col");

    document.getElementById(sortField).classList.add("active_col");
    props.tableSort(sortField);
  }

  if(isFetching) {
    return <Preloader />
  }
  return (
      <div>
        <table className={"table sort_" + sortDirection}>
          <thead className="thead-light">
          <tr>
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
          {
            props.tasks.map((task) => {
              let status_text  = (task.status !== 0) ? "решено" : "открыто";
              let status_color = (task.status !== 0) ? "success" : "danger";

              return (
                  <tr className={style.table_row} key={task.id}>
                    <th scope="row">{task.id}</th>
                    <td>{task.username}</td>
                    <td>{task.email}</td>
                    <td>{task.text}</td>
                    <td className={'text-' + status_color}>{status_text}</td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>
        <PaginatorContainer/>
      </div>
  )
}

export default TaskTable;