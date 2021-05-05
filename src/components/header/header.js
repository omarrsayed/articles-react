import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import * as loginService from "../../services/login-service";

function Header() {
  const history = useHistory();
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  function onLogin() {
    history.push("/login");
  }

  function onLogout() {
    setAuthenticated(false);
    loginService.logout();
  }

  return (
    <div>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to={authenticated ? "/" : "/register"}>{authenticated ? "User Settings" : "Register"}</NavLink>
      </nav>
      <button onClick={authenticated ? onLogout : onLogin}>{authenticated ? "logout" : "login"}</button>
    </div>
  );
}

export default Header;
