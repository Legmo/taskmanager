import React from 'react';
import {connect} from "react-redux";
import { isLogin } from "../../Redux/Actions/users_actions";
import LoginForm from "./LoginForm";

let mapStateToProps = (state) => {
  return {
    isLoggedUser: state.users.loggedUser,
  }
}

const LoginForm_Container = connect(mapStateToProps, { isLogin })(LoginForm);

export default LoginForm_Container;