import React from 'react';
import style from './style.module.css'
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  let adminLinkText = (props.login) ? "Выйти" : "Войти";
  let adminLinkURL = (props.login) ? "/index" : "/login";
  let taskListLinkURL = (props.login) ? "/admin" : "/index";

  let isLogout = () => {
    if (props.login === true) {
      let loginLogout = !props.login;
      props.isLogout(loginLogout);
    }
  }

  return (
      <div className={style.nav_parent + ' mt-3'}>
        <NavLink
            to={taskListLinkURL}
            activeClassName={style.active}
            className="font-weight-light mx-auto pr-3"
        >
          Список задач
        </NavLink>
        <NavLink
            to="/add_task"
            activeClassName={style.active}
            className="font-weight-light mx-auto pr-3"
        >
          Добавить задачу
        </NavLink>
        <NavLink
            to={adminLinkURL}
            onClick ={isLogout}
            activeClassName={style.active}
            className="font-weight-light mx-auto"
        >
          {adminLinkText}
        </NavLink>
      </div>
  )
}


export default Navigation;