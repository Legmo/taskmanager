import React from 'react';
import { Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import style from './style.module.css';

const LoginForm = (props) => {
  const { adminLogin }    = props;
  const { adminPassword } = props;
  const { isLoggedUser }  = props;

  const doLogin = (e) => {
    e.preventDefault();
    const loginForm    = document.login_form.login.value;
    const passwordForm = document.login_form.password.value;

    if ((!isLoggedUser) && (loginForm === adminLogin) && (passwordForm === adminPassword)) {
      props.doLogin(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  if (!isLoggedUser) {
    /* eslint react/jsx-one-expression-per-line: "off" */
    return (
      <div className="col-lg-4 col-md-10 mx-auto">
        <form name="login_form">
          <div className={`${style.loginGroup} form-group position-relative`}>
            <input
              type="text"
              name="login"
              className="form-control"
              id="exampleInputLogin"
              aria-describedby="loginHelp"
              placeholder="Логин"
              required="on"
              // autoFocus="autoFocus"
            />
            <Icon name="user" className="position-absolute" />
          </div>
          <div className={`${style.passwordGroup} form-group position-relative`}>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              required="on"
              placeholder="Пароль"
            />
            <Icon name="lock" className="position-absolute" />
          </div>
          <button
            type="submit"
            to="/"
            name="btn"
            onClick={doLogin}
            className="btn btn-primary"
          >
            Войти
          </button>
        </form>
        <p>
          <small className="form-text text-muted mt-5">
            По вопросам регистрации или восстановления доступа обращайтесь к&nbap;
            <a href="mailto:test@test.ru" title="Написать администратору">администратору</a>
          </small>
        </p>
      </div>
    );
  }

  return <Redirect to="/" />;
};

export default LoginForm;
