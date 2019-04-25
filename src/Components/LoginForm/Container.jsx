import React from 'react';
import {connect} from "react-redux";
import {
  isLogin,
  redirectToAdmin} from "../../Redux/Actions/users_actions";
import LoginForm from "./LoginForm";

//todo: TMP
import {Redirect} from 'react-router-dom'


let mapStateToProps = (state) => {
  return {
    isLoggedUser: state.users.loggedUser,
  }
  // if (0==1) {
  //   return <Redirect to='/admin'/>
  // }
}

let mapDispatchToProps = (dispatch) => {
  return {
    isLogin: (login, password) => {dispatch(isLogin(login, password))},
    redirectToAdmin: (login) => {dispatch(redirectToAdmin(login))},
  }
}

const LoginForm_Container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginForm_Container;