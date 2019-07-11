export const DO_LOGOUT = 'DO-LOGOUT';
export const DO_LOGIN  = 'DO-LOGIN';

export const doLogout = isUserLogged => ({
  type: DO_LOGOUT,
  isUserLogged,
});
export const doLogin = isUserLogged => ({
  type: DO_LOGIN,
  isUserLogged,
});
