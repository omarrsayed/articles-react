import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ArticleDetail from "./components/articles/article-detail";
import articleEdit from "./components/articles/article-edit";
import ArticlesList from "./components/articles/articles-list";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Error from "./components/utils/error";
import PrivateRoute from "./components/utils/private-route";
import AuthContext from "./context/auth-context";
import * as loginService from "./services/login-service";

function App() {
  const [authenticated, setAuthenticated] = useState(loginService.isLogin());

  return (
    <div className="App">
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <Header />
        <Switch>
          <Route exact path="/" component={ArticlesList} />
          <PrivateRoute path="/articles/:id/edit" component={articleEdit} />
          <Route path="/articles/:id" component={ArticleDetail} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Error />
        <ToastContainer hideProgressBar />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
