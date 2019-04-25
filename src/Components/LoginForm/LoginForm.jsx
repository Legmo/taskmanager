import React from 'react';
import {Redirect} from 'react-router-dom'

const LoginForm = (props) => {

  let isLoggedUser = props.isLoggedUser;

  let doRedirect = () => {
    props.redirectToAdmin(true);
  }

 let isLogin = (e) => {
    e.preventDefault();
    let login = document.login_form.login.value;
    let password = document.login_form.password.value;
    if (isLoggedUser === false) {
      props.isLogin(login, password);
    };
  }

  if (!isLoggedUser) {
    return (
        <div>
          <form name="login_form">
            <div className="form-group">
              {/*<label htmlFor="exampleInputEmail1">Email</label>*/}
              <input
                  type="text"
                  name="login"
                  className="form-control"
                  id="exampleInputLogin"
                  aria-describedby="loginHelp"
                  placeholder="Введите логин"
                  autoFocus="autofocus" />
            </div>
            <div className="form-group">
              {/*<label htmlFor="exampleInputPassword1">Пароль</label>*/}
              <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Пароль" />
            </div>
            <button
                type="submit"
                to="/admin"
                name="btn"
                onClick={isLogin}
                className="btn btn-primary"
            >
              Войти
            </button>
          </form>
          <p>
            <small className="form-text text-muted mt-5">По вопросам регистрации или восстановления доступа обращайтесь к <a href="mailto:test@test.ru" title="Написать администратору">администратору</a></small>
          </p>
        </div>
    )
  }
  else {
    return <Redirect to='/admin'/>
  }
}


export default LoginForm;