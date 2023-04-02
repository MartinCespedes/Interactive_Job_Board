import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-500 text-white">
        <h1 className="text-2xl font-bold p-4">Interactive Job Board</h1>
        <nav>
          <ul className="flex justify-around items-center p-4">
            <li>
              <NavLink
                exact
                to="/"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post-job"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Post a Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className="border-b-2 border-transparent hover:border-white py-1"
                activeClassName="border-b-2 border-white"
              >
                Admin Dashboard
              </NavLink>
            </li>
            {/* more links if needed */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
