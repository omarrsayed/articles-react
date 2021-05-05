import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthContext from "../../context/auth-context";
import { deleteArticle, loadArticles } from "../../redux/actions/article-actions";
import { loadUsers } from "../../redux/actions/user-actions";

function ArticleDetail({ loadUsers, loadArticles, deleteArticle, users, articles, article, history }) {
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (users.length === 0) loadUsers().catch((error) => alert(error));
    if (articles.length === 0) loadArticles().catch((error) => alert(error));
  }, []);

  function onDelete() {
    deleteArticle(article.id)
      .then(() => history.push(""))
      .catch((error) => alert(error));
  }

  function onEdit() {
    const path = "/articles/" + article.id + "/edit";
    history.push(path);
  }

  return (
    <div>
      <h2>{article.title}</h2>
      {<p>{article.content}</p>}
      <div>
        <button onClick={onEdit} disabled={!authenticated}>
          Edit
          {/* <Link to={"/articles/" + article.id + "/edit"}>Edit</Link> */}
        </button>
        <button onClick={onDelete} disabled={!authenticated}>
          Delete
        </button>
      </div>
    </div>
  );
}

ArticleDetail.propTypes = {
  users: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  article: PropTypes.object.isRequired,
  loadArticles: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function getArticle(articles, articleId) {
  if (articles.length === 0) return {};
  return articles.find((article) => article.id == articleId) || null;
}

function mapStateToProps(state, ownProps) {
  const articleId = ownProps.match.params.id;
  return {
    articles: state.users,
    article: getArticle(state.articles, articleId),
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: bindActionCreators(loadUsers, dispatch),
    loadArticles: bindActionCreators(loadArticles, dispatch),
    deleteArticle: bindActionCreators(deleteArticle, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
