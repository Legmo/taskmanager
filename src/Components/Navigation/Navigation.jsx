import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Navigation = (props) => {
  const { login: isUserLogged } = props;
  const adminLinkText           = isUserLogged ? 'Выйти' : 'Войти';

  const doLogout = () => {
    if (isUserLogged) { props.doLogout(!isUserLogged); }
  };

  /* eslint react/jsx-one-expression-per-line: "off" */
  return (
    <div className={`${style.nav_parent} mt-3`}>
      <NavLink
        exact
        to="/"
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
        to="/login"
        onClick={doLogout}
        activeClassName={style.active}
        className="font-weight-light mx-auto"
      >
        {adminLinkText}
      </NavLink>
    </div>
  );
};

export default Navigation;
