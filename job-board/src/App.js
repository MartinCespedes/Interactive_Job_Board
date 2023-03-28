import React from 'react';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Job Board</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* Add more navigation links for other components as needed */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;