import React from 'react';
import style from './style.module.css'
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  let isUserLogged    = props.login;
  let taskListLinkURL = isUserLogged ? "/admin" : "/";
  let adminLinkText   = isUserLogged ? "Выйти" : "Войти";

  const doLogout = () => {
    isUserLogged && props.doLogout(!isUserLogged);
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
            to={"/login"}
            onClick ={doLogout}
            activeClassName={style.active}
            className="font-weight-light mx-auto"
        >
          {adminLinkText}
        </NavLink>
      </div>
  )
}


export default Navigation;