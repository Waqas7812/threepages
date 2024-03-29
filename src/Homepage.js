// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo List</Link>
          </li>
          <li>
            <Link to="/chart">Chart Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;
