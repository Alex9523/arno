import React from 'react';
//import './menu.css';

function Navbar() {
  return (
    <nav className="navbar">
          <div>
            <a href="./main">Main</a>
          </div>
          <div>
            <a href="./authorization">Athoruzation</a>
          </div>
          <div>
            <a href="./about">About</a>
          </div>
    </nav>
  );
}

export default Navbar;
