import { Redirect, Route } from "react-router";
import * as loginService from "../../services/login-service";

function PrivateRoute({ path, component }) {
  return loginService.isLogin() ? <Route path={path} component={component} /> : <Redirect to="/login" />;
}

export default PrivateRoute;
