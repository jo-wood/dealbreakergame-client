import React from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Sessions from './Sessions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
require('dotenv').config()


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Sessions" component={Sessions} />
        </Switch>
      </div>
    </Router >
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

export default App;
