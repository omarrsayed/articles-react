import * as endpoints from "./endpoints";
import * as httpHeader from "./http-header";
import * as httpRequest from "./http-request";
import { handleError, handleResponse } from "./utils.js";

export function getAll() {
  return fetch(endpoints.ARTICLES_ENDPOINT)
    .then(handleResponse)
    .catch(handleError);
}

export function save(article) {
  const init = {
    method: httpRequest.POST,
    headers: {
      [httpHeader.CONTENT_TYPE]: httpHeader.APPLICATION_JSON_CONTENT_TYPE,
    },
    body: JSON.stringify(article),
  };
  return fetch(endpoints.ARTICLES_ENDPOINT, init)
    .then(handleResponse)
    .catch(handleError);
}

export function getById(articleId) {
  const endpoint = endpoints.ARTICLES_ENDPOINT + "/" + articleId;
  return fetch(endpoint).then(handleResponse).catch(handleError);
}

export function remove(articleId) {
  const init = { method: httpRequest.DELETE };
  const endpoint = endpoints.ARTICLES_ENDPOINT + "/" + articleId;
  return fetch(endpoint, init).then(handleResponse).catch(handleError);
}
