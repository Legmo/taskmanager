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
    <>
      <div className="table-responsive">
        <table className={"table sort_" + sortDirection} id={"table"}>
          <thead className="thead-light">
            <tr>
              {props.tableHeaders.map((h) => {
                return (
                  <th
                      onClick={onSortTable}
                      id={h.header_id}
                      key={h.header_id}
                      className={style.th + " " + (sortFieldDefault === h.header_id ? "active_col" : "")}
                  >
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
                  <th className={style.th} scope="row">{task.id}</th>
                  <td className={style.td}>{task.username}</td>
                  <td className={style.td}>{task.email}</td>
                  <td className={style.td}>{task.text}</td>
                  <td className={style.td + " text-" + status_color}>{status_text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <PagerContainer/>
    </>
  )
}

export default TaskTable;