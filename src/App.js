import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import PostDetails from "./components/PostDetails";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:userId">
            <UserDetails />
          </Route>
          <Route path="/post/:postId">
            <PostDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
