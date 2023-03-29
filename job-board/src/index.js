import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route path="/jobs" component={JobList} />
        <Route path="/post-job" component={JobForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={AdminDashboard} />
        {/* Add more routes for other components as needed */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
