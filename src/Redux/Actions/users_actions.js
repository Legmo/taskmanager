export const IS_LOGOUT =         'IS-LOGOUT';
export const IS_LOGIN =          'IS-LOGIN';

export const isLogout = (loginLogout) => ({
  type: IS_LOGOUT,
  loggedUser: loginLogout,
});
export const isLogin = (login, password) => ({
  type: IS_LOGIN,
  login: login,
  password: password,
});