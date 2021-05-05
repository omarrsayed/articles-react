import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import AuthContext from "../../context/auth-context";
import { loadArticles, saveArticle } from "../../redux/actions/article-actions";
import { loadUsers } from "../../redux/actions/user-actions";

function ArticleEdit({ history, saveArticle, loadArticles, articles, ...props }) {
  const [article, setArticle] = useState({});
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (articles.length === 0) loadArticles().catch((error) => alert(error));
    setArticle(props.article);
  }, [props.article]);

  function onEdit(event) {
    event.preventDefault();
    saveArticle(article);
  }

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setArticle((article) => ({
      ...article,
      [name]: value,
    }));
  }

  return (
    <div>
      {/* {!authenticated && <Redirect to="/" />} */}
      <h1>ARTICLE_EDIT</h1>
      <h2>{article.title}</h2>
      <form onSubmit={onEdit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={article.title}
          onChange={onChange}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          value={article.content}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ArticleEdit.propTypes = {
  article: PropTypes.object.isRequired,
  saveArticle: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
};

function getArticle(articles, articleId) {
  if (articles.length === 0) return {};
  return articles.find((article) => article.id == articleId) || null;
}

function mapStateToProps(state, ownProps) {
  const articleId = ownProps.match.params.id;
  return {
    article: getArticle(state.articles, articleId),
    articles: state.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: bindActionCreators(loadUsers, dispatch),
    saveArticle: bindActionCreators(saveArticle, dispatch),
    loadArticles: bindActionCreators(loadArticles, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);
