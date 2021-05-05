import * as endpoints from "./endpoints";
import * as httpHeader from "./http-header";
import * as httpRequest from "./http-request";
import { handleError, handleResponse } from "./utils.js";

export function getAll() {
  return fetch(endpoints.USERS_ENDPOINT).then(handleResponse).catch(handleError);
}

export function getByEmail(userEmail) {
  const endpoint = endpoints.USERS_ENDPOINT + "?email=" + userEmail;
  return fetch(endpoint).then(handleResponse).catch(handleError);
}

export function login(user) {
  const init = {
    method: httpRequest.POST,
    headers: { [httpHeader.CONTENT_TYPE] : httpHeader.APPLICATION_JSON_CONTENT_TYPE },
    body: JSON.stringify(user),
  };
  return fetch(endpoints.LOGIN_ENDPOINT, init).then(handleResponse).catch(handleError);
}

export function register(user) {
  const init = {
    method: httpRequest.POST,
    headers: { [httpHeader.CONTENT_TYPE] : httpHeader.APPLICATION_JSON_CONTENT_TYPE },
    body: JSON.stringify(user),
  };
  return fetch(endpoints.REGISTER_ENDPOINT, init).then(handleResponse).catch(handleError);
}