import React from 'react';
import style from './style.module.css'
import { Checkbox } from 'semantic-ui-react'

const Table = (props) => {
  let sortFieldDefault  = props.sortField
  let sortDirection     = props.sortDirection
  let isLoggedUser      = props.login
  let onSortTable       = props.onSortTable
  let onStatusChange    = props.onStatusChange
  let onTextChangeLocal = props.onTextChangeLocal
  let taskTextSend      = props.taskTextSend;

  let tableHeaderTh = props.tableHeaders.map((h) => {
    return (
        <th
            onClick={onSortTable}
            id={h.header_id}
            key={h.header_id}
            className={style.th + " " + (sortFieldDefault === h.header_id ? "active_col" : "")}
        >
          {h.header_name}
          <span className="indicator">&nbsp;</span>
        </th>
    )
  })
  let tableBodyTdAdmin = props.tasks.map((task) => {
    let status_color = task.status !== 0 ? "success" : "danger";
    let status_text  = task.status !== 0 ? "решено" : "открыто";
    let status_boolean = Boolean(task.status);

    return (
      <tr className={style.table_row} key={task.id}>
        <th className={style.th} scope="row">{task.id}</th>
        <td className={style.td}>{task.username}</td>
        <td className={style.td}>{task.email}</td>
        <td className={style.td}>
          <textarea
              value={task.text}
              onChange={onTextChangeLocal}
              id={task.id}
              className="d-block mb-2 w-100"
          />
          <button
              type="button"
              key={`btn_${task.id}`}
              onClick={taskTextSend}
              className="btn btn-outline-primary btn-sm d-none"
          >Сохранить изменения
          </button>
        </td>
        <td className={style.td + " text-" + status_color}>
          <div className="form-check">
            <Checkbox
                key={'checkbox-' + task.id}
                toggle
                defaultChecked={status_boolean}
                className="form-check-input"
                name="exampleRadios"
                id={"exampleRadios" + task.id}
                value={"option" + task.id}
                onChange={onStatusChange}
            />
            <label className="form-check-label"
                   htmlFor={"exampleRadios" + task.id}>{status_text}</label>
          </div>
        </td>
      </tr>
    )
  })
  let tableBodyTdAnonymous = props.tasks.map((task) => {
    let status_text = (task.status !== 0) ? "решено" : "открыто";
    let status_color = (task.status !== 0) ? "success" : "danger";
    return (
        <tr className={style.table_row} key={task.id}>
          <th className={style.th} scope="row">{task.id}</th>
          <td className={style.td}>{task.username}</td>
          <td className={style.td}>{task.email}</td>
          <td className={style.td}>{task.text}</td>
          <td className={style.td + " text-" + status_color}>{status_text}</td>
        </tr>
    )
  })


  if (isLoggedUser) {
    return (
      <form>
        <table className={"table sort_" + sortDirection} id={"table"}>
          <thead className="thead-light">
            <tr>
              {tableHeaderTh.map(th => th)}
            </tr>
          </thead>
          <tbody>
            {tableBodyTdAdmin.map(td => td)}
          </tbody>
        </table>
      </form>
    )
  }
  return (
    <table className={"table sort_" + sortDirection} id={"table"}>
      <thead className="thead-light">
        <tr>
          {tableHeaderTh.map(th => th)}
        </tr>
      </thead>
      <tbody>
        {tableBodyTdAnonymous.map(td => td)}
      </tbody>
    </table>
  )
}
export default Table;