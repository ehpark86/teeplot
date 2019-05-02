import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'


function Navbar() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper light-blue lighten-2">
          <div class="container">
              <a href="/" class="brand-logo">TeePlot</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">How it Works</a></li>
                <li><a href="/">Login</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
