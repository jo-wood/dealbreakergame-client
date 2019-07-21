import React from 'react';
import './App.css';
import Auth from './oauth.jsx';
import Nav from './Nav';
import Login from './Login';
import Session from './Session'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Session" component={Session} />
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
