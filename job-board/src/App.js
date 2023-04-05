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
          </ul>
        </nav>
        </header>
        <main className="flex flex-col items-center justify-start h-screen bg-white text-black pt-16">
  <div className="text-center p-4">
    <h2 className="text-3xl font-semibold mb-4">Find Your Dream Job Today</h2>
    <p className="text-lg mb-6">Search thousands of job listings and find the perfect fit for you.</p>
    <div className="w-full sm:w-3/4 lg:w-1/2">
      <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-2 border-black rounded-md focus:outline-none focus:border-blue-300"
                  placeholder="Job title, keywords or company"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full p-2 h-10 border-2 border-black rounded-md focus:outline-none focus:border-blue-300"
                  placeholder="City, state, zip or remote"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-300 hover:text-black"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;