import React from 'react';
import {connect} from "react-redux";
import {
  isLogin,
  redirectToAdmin} from "../../Redux/Actions/users_actions";
import LoginForm from "./LoginForm";

let mapStateToProps = (state) => {
  return {
    isLoggedUser: state.users.loggedUser,
  }
}

const LoginForm_Container = connect(mapStateToProps, {//mapDispatchToProps
  isLogin,
  redirectToAdmin
})(LoginForm);

export default LoginForm_Container;