import React from 'react';
import style from './style.module.css'
import {Redirect} from 'react-router-dom'
import Paginator_Container from "../Paginator/Container";
import * as axios from "axios";
// import {CheckboxToggle, CheckboxChecked} from "../Checkbox"

class TaskTableAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.props.tasks.isLoading = true;
  }

  componentDidMount() {
    if(this.props.tasks.isLoading) {
      axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=15')
          .then(response => {
            this.props.setTasks(response.data.message.tasks)
          });
      this.props.tasks.isLoading = false;
    }
  }

  isLoggedUser = this.props.login;
  sortDirection = this.props.sortDirection;

  onSortTable = (event) => {
    let sortField = event.target.id;

    //Table sorting - add/change indicator
    let firstActiveTh = document.getElementsByClassName("active_col")[0];
    if (firstActiveTh) {firstActiveTh.classList.remove("active_col");}
    document.getElementById(sortField).classList.add("active_col");

    this.props.sortTable(sortField);
  }

  onStatusChange = (event) => {
    let checkbox = document.getElementById(event.target.id);
    let id = (event.target.id).replace('exampleRadios', '');
    let status = 0;

    if (checkbox.hasAttribute('checked')) {
      (event.target).removeAttribute ("checked");
    } else {
      (event.target).setAttribute("checked","checked");
      status = 10;
    }

    this.props.updateTaskStatus(status, id);
  }

  onTaskTextChange = (event) => {
    let text = event.target.value;
    let id =  event.target.id;
    this.props.updateTaskText(text, id);

    //после первого изменения отобразить кнопку «Сохранить»
    // let button = document.getElementById(event.target.id);
  }

  /*
  tableElements = props.tasks.map((props) => {
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
            {/!*{checkbox}*!/}
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
*/

  render() {
    // if(this.isLoggedUser) {
    if(true) {
        return (
            <div>
              <form>
                <table className={"table sort_"+this.sortDirection}>
                  <thead className="thead-light">
                  <tr>
                    {/*{tableHeaders}*/}
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
                  {/*{tableElements}*/}
                  {
                    this.props.tasks.map((task) => {
                      let status_check = (task.status !== 0) ? "checked" : ""; //todo - KISS
                      let status_color = (task.status !== 0) ? "success" : "danger"; //todo - KISS
                      let status_text = (task.status !== 0) ? "решено" : "открыто"; //todo - KISS

                      //Todo: разобраться с подключением чекбоксов
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
                          <tr className={style.table_row} key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.username}</td>
                            <td>{task.email}</td>
                            <td>
                            <textarea
                                value={task.text}
                                onChange={this.onTaskTextChange}
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
                                    onChange={this.onStatusChange}
                                />
                                <label className="form-check-label"
                                       htmlFor={"exampleRadios" + task.id}>{status_text}</label>
                              </div>
                            </td>
                          </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </form>
              <Paginator_Container/>
            </div>
      )
    }
    else {
      return(
        <div>
          <p className="text-center text-danger">Страница доступна только для авторизованных пользователей.</p>
        </div>
      )
    }
  }
}

export default TaskTableAdmin;