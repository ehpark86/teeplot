import React from 'react';
import Login from './Login';
import Signup from './Signup';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Navbar() {
  return (
    <Router>
    <div>
      <nav>
        <div class="nav-wrapper light-blue lighten-2">
          <Link to="/" class="brand-logo">TeePlot</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/">How it Works</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>
      </nav>
    </div>

 
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />

    </Router>
  );
}

export default Navbar;
