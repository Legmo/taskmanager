import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { doLogout } from '../../Redux/Actions/usersActions';
import Navigation from './Navigation';

const mapStateToProps = state => ({ login: state.users.loggedUser });
const NavigationContainer = connect(mapStateToProps, { doLogout })(Navigation);

export default NavigationContainer;
