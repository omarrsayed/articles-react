import * as actionTypes from "../actions/action-types";

export default function articleReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTICLES_SUCCESS:
      return action.articles
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return state.filter(article => article.id !== action.articleId);
    default:
      return state;
  }
}
