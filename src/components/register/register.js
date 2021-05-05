import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../redux/actions/user-actions";
import { bindActionCreators } from "redux";

function Register({ register, history }) {
  const [user, setUser] = useState({});

  function onRegister(event) {
    event.preventDefault();
    register(user);
    history.push("/login");
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
    <form onSubmit={onRegister}>
      <h1>Register</h1>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={onChange} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" onChange={onChange} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={onChange} />
      <button type="submit">Register</button>
    </form>
  );
}

Register.propTypes = {
  user: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: bindActionCreators(register, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
