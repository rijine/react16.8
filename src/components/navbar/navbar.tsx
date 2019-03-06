import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='users/approved'>Users - NO</Link>
          </li>
          <li>
            <Link to='users/unapproved'>Users - YE</Link>
          </li>
          <li>
            <Link to='products/approved'>Products - NO</Link>
          </li>
          <li>
            <Link to='products/unapproved'>Products - YE</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;