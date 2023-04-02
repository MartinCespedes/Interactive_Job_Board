import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-blue-500 text-white">
        <h1 className="text-2xl font-bold p-4">Interactive Job Board</h1>
        <nav>
          <ul className="flex justify-around items-center p-4">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-yellow-400">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/post-job" className="hover:text-yellow-400">
                Post a Job
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-yellow-400">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-yellow-400">
                Admin Dashboard
              </Link>
            </li>
            {/* more links if needed */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
