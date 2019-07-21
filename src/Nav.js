import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  }


  return (
    <nav>
      <h3>DEALBREAKER</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/session">
        <li>session</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
