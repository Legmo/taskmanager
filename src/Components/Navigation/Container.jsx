import React from 'react';
import {connect} from "react-redux";
import {isLogout} from "../../Redux/Actions/users_actions";
import Navigation from "./Navigation";


let mapStateToProps = (state) => {
  return {
    login: state.users.loggedUser,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    isLogout: (loginLogout) => {dispatch(isLogout(loginLogout))},
  }
}

const Navigation_Container = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navigation_Container;