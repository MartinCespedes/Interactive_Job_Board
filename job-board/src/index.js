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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Adminboard />} />
        {/* Add more routes for other components as needed */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);