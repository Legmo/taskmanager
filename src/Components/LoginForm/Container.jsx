import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { doLogin } from '../../Redux/Actions/usersActions';
import LoginForm from './LoginForm';

const mapStateToProps = state => ({
  isLoggedUser:  state.users.loggedUser,
  adminLogin:    state.users.adminLogin,
  adminPassword: state.users.adminPassword,
});

const LoginFormContainer = connect(mapStateToProps, { doLogin })(LoginForm);

export default LoginFormContainer;
