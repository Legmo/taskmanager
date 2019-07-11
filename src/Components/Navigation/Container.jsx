import React from 'react';
import {connect} from "react-redux";
import {doLogout} from "../../Redux/Actions/usersActions";
import Navigation from "./Navigation";

let mapStateToProps = (state) => {
  return {
    login: state.users.loggedUser,
  }
}

const NavigationContainer = connect(mapStateToProps, {doLogout})(Navigation);

export default NavigationContainer;