import React from 'react';
import {connect} from "react-redux";
import { doLogin } from "../../Redux/Actions/users_actions";
import LoginForm from "./LoginForm";

let mapStateToProps = (state) => {
  return {
    isLoggedUser:  state.users.loggedUser,
    adminLogin:    state.users.adminLogin,
    adminPassword: state.users.adminPassword,
  }
}

const LoginFormContainer = connect(mapStateToProps, { doLogin })(LoginForm);

export default LoginFormContainer;