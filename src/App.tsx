import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Users from './components/users/users';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

class App extends Component {
  render() {
    // const url = process.env.REACT_APP_URL;
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Users} />
          <Route path="/users" component={Users} />
          <Route path="/products" component={Users} />
          <Route path="/products/approved" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
