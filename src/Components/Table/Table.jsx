import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import style from './style.module.css';

const Table = (props) => {
  const { sortField: sortFieldDefault } = props;
  const { login: isLoggedUser }         = props;
  const { sortDirection }               = props;
  const { onSortTable }                 = props;
  const { onStatusChange }              = props;
  const { onTextChangeLocal }           = props;
  const { taskTextSend }                = props;

  const tableHeaderTh = props.tableHeaders.map((h) => {
    let isActiveCol = '';
    if (sortFieldDefault === h.header_id) {
      isActiveCol = 'active_col';
    }
    return (
      <th
        onClick={onSortTable}
        id={h.header_id}
        key={h.header_id}
        className={`${style.th} ${isActiveCol}`}
      >
        {h.header_name}
        <span className="indicator">&nbsp;</span>
      </th>
    );
  });
  const tableBodyTdAdmin = props.tasks.map((task) => {
    const statusColor   = task.status !== 0 ? 'success' : 'danger';
    const statusText    = task.status !== 0 ? 'решено' : 'открыто';
    const statusBoolean = Boolean(task.status);

    /* eslint react/jsx-one-expression-per-line: "off" */
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
          >
            Сохранить изменения
          </button>
        </td>
        <td className={`${style.td} text-${statusColor}`}>
          <div className="form-check">
            <label
              className="form-check-label"
              htmlFor={`exampleRadios${task.id}`}
            >
              <Checkbox
                key={`checkbox-'${task.id}`}
                toggle
                defaultChecked={statusBoolean}
                className="form-check-input"
                name="exampleRadios"
                id={`exampleRadios${task.id}`}
                value={`option${task.id}`}
                onChange={onStatusChange}
              />
              {statusText}
            </label>
          </div>
        </td>
      </tr>
    );
  });
  const tableBodyTdAnonymous = props.tasks.map((task) => {
    const statusText = (task.status !== 0) ? 'решено' : 'открыто';
    const statusColor = (task.status !== 0) ? 'success' : 'danger';
    return (
      <tr className={style.table_row} key={task.id}>
        <th className={style.th} scope="row">{task.id}</th>
        <td className={style.td}>{task.username}</td>
        <td className={style.td}>{task.email}</td>
        <td className={style.td}>{task.text}</td>
        <td className={`${style.td} text-${statusColor}`}>{statusText}</td>
      </tr>
    );
  });

  if (isLoggedUser) {
    return (
      <form>
        <table className={`table sort_${sortDirection}`} id="table">
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
    );
  }
  return (
    <table className={`table sort_${sortDirection}`} id="table">
      <thead className="thead-light">
        <tr>
          {tableHeaderTh.map(th => th)}
        </tr>
      </thead>
      <tbody>
        {tableBodyTdAnonymous.map(td => td)}
      </tbody>
    </table>
  );
};

export default Table;
