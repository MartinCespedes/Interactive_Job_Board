import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';

const { Switch } = require('react-router-dom');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        {/* Add more routes for other components as needed */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);