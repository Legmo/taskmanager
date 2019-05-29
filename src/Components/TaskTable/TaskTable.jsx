import React from 'react';
import PagerContainer from "../Helpers/Pager/Container";
import style from './style.module.css'
import Preloader from "../Helpers/Preloader/Preloader";

const TaskTable = (props) => {
  let sortFieldDefault  = props.sortField
  let sortDirection     = props.sortDirection
  let onSortTable       = props.onSortTable
  let isFetching        = props.isFetching

  if(isFetching) {
    return <Preloader />
  }
  return (
    <div>
      <table className={"table sort_" + sortDirection}>
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
          })}
        </tbody>
      </table>
      <PagerContainer/>
    </div>
  )
}

export default TaskTable;