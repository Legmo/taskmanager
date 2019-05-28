import React from 'react';
import style from './style.module.css'
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  let taskListLinkURL = props.login ? "/admin" : "/";
  let adminLinkURL    = props.login ? "/" : "/login";
  let adminLinkText   = props.login ? "Выйти" : "Войти";

  let isLogout = () => {
    props.login && props.isLogout(!props.login);
  }

  return (
      <div className={style.nav_parent + ' mt-3'}>
        <NavLink
            exact
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