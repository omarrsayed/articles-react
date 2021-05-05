import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../redux/actions/user-actions";
import { bindActionCreators } from "redux";
import * as loginService from "../../services/login-service";
import AuthContext from "../../context/auth-context";

function Login({ login, history }) {
  const [user, setUser] = useState({});
  const { setAuthenticated } = useContext(AuthContext);

  function onLogin(event) {
    event.preventDefault();
    login(user).then((action) => {
      loginService.saveToken(action.token.accessToken);
      setAuthenticated(true);
      history.push("");
    });
  }

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={onLogin}>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" onChange={onChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={onChange} />
      <button type="submit">Login</button>
    </form>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Login);
