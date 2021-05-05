import * as actionTypes from "./action-types";
import * as articlesAPI from "../../api/articles";
import actionError from "./error-actions";

export function loadArticlesSuccess(articles) {
  return { type: actionTypes.LOAD_ARTICLES_SUCCESS, articles };
}

export function saveArticleSuccess(article) {
  return { type: actionTypes.SAVE_ARTICLE_SUCCESS, article };
}

export function deleteArticleSuccess(articleId) {
  return { type: actionTypes.DELETE_ARTICLE_SUCCESS, articleId };
}

export function loadArticles() {
  return function (dispatch) {
    return articlesAPI
      .getAll()
      .then((articles) => dispatch(loadArticlesSuccess(articles)))
      .catch((error) => dispatch(actionError(actionTypes.LOAD_ARTICLES_ERROR, error)));
  };
}

export function saveArticle(article) {
  return function (dispatch) {
    return articlesAPI
      .save(article)
      .then((article) => dispatch(saveArticleSuccess(article)))
      .catch((error) => dispatch(actionError(actionTypes.SAVE_ARTICLE_ERROR, error)));
  };
}

export function deleteArticle(articleId) {
  return function (dispatch) {
    return articlesAPI
      .remove(articleId)
      .then(() => dispatch(deleteArticleSuccess(articleId)))
      .catch((error) => dispatch(actionError(actionTypes.DELETE_ARTICLE_ERROR)));
  };
}
