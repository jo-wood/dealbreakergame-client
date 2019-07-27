import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  }


  return (
    <nav>
      <a href="/" className="logo">
        <h1>Deal<strong>Breaker</strong></h1>
      </a>
      <ul className="nav-links">
        {/* <Link style={navStyle} to="/session">
        <li>session</li>
        </Link> */}
        <Link style={navStyle} to="/login">
          <li>login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
