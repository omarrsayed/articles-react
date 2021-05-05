import React from "react";
import ArticlesList from "../articles/articles-list.js";
import { Route, Switch } from "react-router-dom";

const Home = () => (
    <div>
        <h1>HOME</h1>
        <Switch>
            <Route exact path="/" component={ArticlesList} />
            <Route path="/articles/:id" component={ArticlesList} />
            {/* <Route path="/login" component={Login} /> */}
        </Switch>
        {/* <ArticlesList />     */}
    </div>
);

export default Home;