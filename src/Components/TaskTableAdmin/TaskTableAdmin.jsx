import React from 'react';
import style from './style.module.css'
import PagerContainer from "../Helpers/Pager/Container";
import Preloader from "../Helpers/Preloader/Preloader";
import { Checkbox } from 'semantic-ui-react'

const TaskTableAdmin = (props) => {
  let sortFieldDefault  = props.sortField
  let sortDirection     = props.sortDirection;
  let onSortTable       = props.onSortTable
  let onStatusChange    = props.onStatusChange
  let isFetching        = props.isFetching;
  let isLoggedUser      = props.login;

  const onTaskTextChange = (event) => {
    let text = event.target.value;
    let id   = event.target.id;
    props.updateTaskText(text, id);
  }

  // if(isLoggedUser) {
  if(true) {
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
                  </td>
                  <td className={'text-' + status_color}>
                    <div className="form-check">
                      <Checkbox
                          key={'checkbox-'+task.id}
                          toggle
                          defaultChecked={task.status}
                          className="form-check-input"
                          name="exampleRadios"
                          id={"exampleRadios" + task.id}
                          value={"option" + task.id}
                          onChange={onStatusChange}
                      />
                      <label className="form-check-label" htmlFor={"exampleRadios" + task.id}>{status_text}</label>
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