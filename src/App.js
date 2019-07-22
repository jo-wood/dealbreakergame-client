import React from 'react';
import './styles/main.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Game from './components/Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privacy from './components/Privacy';
require('dotenv').config()


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/privacy" component={Privacy}/>
        </Switch>
      </div>
    </Router >
  );
}


export default App;
