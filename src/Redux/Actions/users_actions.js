export const IS_LOGOUT =               'IS-LOGOUT';
export const IS_LOGIN =                'IS-LOGIN';
export const REDIRECT_TO_ADMIN =       'REDIRECT-TO-ADMIN';

export const isLogout = (loginLogout) => ({
  type: IS_LOGOUT,
  loggedUser: loginLogout,
});
export const isLogin = (login, password) => ({
  type: IS_LOGIN,
  login: login,
  password: password,
});
export const redirectToAdmin = (login) => ({
  type: REDIRECT_TO_ADMIN,
  login: login,
});