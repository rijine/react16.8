import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UsersPage from './containers/UsersPage/UsersPage';

class App extends Component {
  render() {
    // const url = process.env.REACT_APP_URL;
    return (
      <Router>
        <div>
          {
            <div>
              <Navbar />
              <hr />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Users} />
              <Route path="/users" component={UsersPage} />
              <Route path="/products" component={Users} />
              <Route path="/products/approved" component={Users} />
            </div>
          }
        </div>
      </Router>
    );
  }
}

export default App;
