import {
  IS_LOGIN,
  IS_LOGOUT,
  REDIRECT_TO_ADMIN,
} from '../Actions/users_actions'

const initialState = {
    loggedUser: false,
};

const adminLogin = "admin";
const adminPassword = "123";

const users_reducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_LOGOUT: {
      return  {
        ...state,
        loggedUser: action.loggedUser,
      };
    }
    case IS_LOGIN: {
      let stateCopy = {...state};
      if (
          (stateCopy.loggedUser === false) &&
          (action.login === adminLogin) &&
          (action.password === adminPassword)
      ) {
        stateCopy.loggedUser = true;
      }
      else {
        alert('Неверный логин или пароль');
      }
      return stateCopy;
    }
    case REDIRECT_TO_ADMIN: {
      return {...state}; //Todo: we need to remove this reducer.
    }
    default:
      return state;
  }
}

export default users_reducer;