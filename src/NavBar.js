// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = ({ loggedInUser }) => {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/userlist">User List</Link>
        </li>
        <li>
          <Link to="/accountlist">Account List</Link>
        </li>
        <li>
          <Link to="/addaccount">Add Account</Link>
        </li>
       
        {loggedInUser && (
          <li>
            <span className="username">Welcome, {loggedInUser.username}!</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
