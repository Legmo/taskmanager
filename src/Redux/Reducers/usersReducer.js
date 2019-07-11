import {
  DO_LOGIN,
  DO_LOGOUT,
} from '../Actions/usersActions';

const initialState = {
  loggedUser: false,
  //TODO: improve security
  adminLogin: 'admin',
  adminPassword: '123',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGOUT: {
      return {
        ...state,
        loggedUser: action.isUserLogged,
      };
    }
    case DO_LOGIN: {
      return {
        ...state,
        loggedUser: action.isUserLogged,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
