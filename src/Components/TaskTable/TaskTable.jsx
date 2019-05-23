import React from 'react';
import * as axios from "axios";
import Paginator_Container from "../Paginator/Container";
import style from './style.module.css'

class TaskTable extends React.Component {
  constructor(props) {
    super(props);
    this.props.tasks.isLoading = true;
  }

  componentDidMount() {
    if(this.props.tasks.isLoading) {
      axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=1')
      .then(response => {
        this.props.setTasks(response.data.message.tasks)
      });
      this.props.tasks.isLoading = false;
    }
  }

  sortDirection = this.props.sortDirection;

  onSortTable = (event) => {
    let sortField = event.target.id;
    let firstActiveTh = document.getElementsByClassName("active_col")[0];
    firstActiveTh && firstActiveTh.classList.remove("active_col");

    document.getElementById(sortField).classList.add("active_col");
    this.props.tableSort(sortField);
  }

  render() {
    return (
        <div>
          <table className={"table sort_"+this.sortDirection}>
            <thead className="thead-light">
              <tr>
                <th onClick={this.onSortTable} id="id">
                  ID
                  <span className="indicator"></span>
                </th>
                <th onClick={this.onSortTable} id="username">
                  Пользователь
                  <span className="indicator"></span>
                </th>
                <th onClick={this.onSortTable} id="email">
                  Email
                  <span className="indicator"></span>
                </th>
                <th onClick={this.onSortTable} id="text">
                  Задача
                  <span className="indicator"></span>
                </th>
                <th onClick={this.onSortTable} id="status">
                  Статус
                  <span className="indicator"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.tasks.map((task) => {
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
          <Paginator_Container/>
        </div>
    )
  }

}

export default TaskTable;