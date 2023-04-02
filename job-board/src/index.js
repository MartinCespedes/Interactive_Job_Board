import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import Profile from "./components/Profile";
import Adminboard from "./components/Adminboard";
import SignUp from "./components/SignUp";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobList />
            </Layout>
          }
        />
        <Route
          path="/post-job"
          element={
            <Layout>
              <JobForm />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/admin"
          element={
            <Layout>
              <Adminboard />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        {/* Add more routes for other components as needed */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
