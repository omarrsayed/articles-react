import * as actionTypes from "./action-types";
import * as usersAPI from "../../api/users";
import actionError from "./error-actions";

export function loginSuccess(token) {
  return { type: actionTypes.LOGIN_SUCCESS, token };
}

export function registerSuccess(user) {
  return { type: actionTypes.REGISTER_SUCCESS, user };
}

export function loadUsersSuccess(users) {
  return { type: actionTypes.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    return usersAPI
      .getAll()
      .then((users) => dispatch(loadUsersSuccess(users)))
      .catch((error) => dispatch(actionError(actionTypes.LOAD_USERS_ERROR, error)));
  };
}

export function register(user) {
  return function (dispatch) {
    return usersAPI
      .register(user)
      .then(() => {
        return usersAPI.getByEmail(user.email);
      })
      .then((user) => dispatch(registerSuccess(user)))
      .catch((error) => dispatch(actionError(actionTypes.REGISTER_ERROR, error)));
  };
}

export function login(user) {
  return function (dispatch) {
    return usersAPI
      .login(user)
      .then((token) => dispatch(loginSuccess(token)))
      .catch((error) => dispatch(actionError(actionTypes.LOGIN_ERROR, error)));
  };
}
