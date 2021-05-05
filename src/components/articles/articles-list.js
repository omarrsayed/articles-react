import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { loadArticles } from "../../redux/actions/article-actions";
import { loadUsers } from "../../redux/actions/user-actions";

function ArticlesList({ loadArticles, loadUsers, articles }) {
  useEffect(() => {
    loadUsers().catch((error) => alert(error));
    loadArticles().catch((error) => alert(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => {
          return (
            <tr key={article.id}>
              <td>
                <Link to={"/articles/" + article.id}>{article.title}</Link>
              </td>
              <td>{article.userName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loadArticles: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapArticles(state) {
  if (state.users.length === 0) return [];
  return state.articles.map((article) => {
    article.userName = state.users.find((user) => user.id == article.userId).name;
    return article;
  });
}

function mapStateToProps(state, ownProps) {
  return {
    articles: mapArticles(state),
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticles: bindActionCreators(loadArticles, dispatch),
    loadUsers: bindActionCreators(loadUsers, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
