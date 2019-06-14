import {
  DO_LOGIN,
  DO_LOGOUT,
} from '../Actions/users_actions'

const initialState = {
    loggedUser: false,
    adminLogin: "admin", //TODO: improve security
    adminPassword: "123", //TODO: improve security
};

const users_reducer = (state = initialState, action) => {
  switch(action.type) {
    case DO_LOGOUT: {
      return  {
        ...state,
        loggedUser: action.isUserLogged,
      };
    }
    case DO_LOGIN: {
      return  {
        ...state,
        loggedUser: action.isUserLogged,
      };
    }
    default:
      return state;
  }
}

export default users_reducer;