import React from 'react';
import {connect} from "react-redux";
import {isLogout} from "../../Redux/Actions/users_actions";
import Navigation from "./Navigation";

let mapStateToProps = (state) => {
  return {
    login: state.users.loggedUser,
  }
}

const Navigation_Container = connect(mapStateToProps, {isLogout})(Navigation);

export default Navigation_Container;