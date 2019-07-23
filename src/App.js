import React from 'react';
import './styles/main.scss';
import './styles/question.css';
import Nav from './components/Nav';
import Home from './components/Home';
//import Login from './components/Login';
import Game from './components/Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privacy from './components/Privacy';
import Loading from './components/Loading';
import Footer from './components/Footer';

// ------ Unstated
import { Provider } from 'unstated';

require('dotenv').config()


function App() {
  return (
    <Router>
      <Provider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Home} />
            <Route path="/loading" component={Loading}/>
            <Route path="/game" component={Game} />
            <Route path="/privacy" component={Privacy}/>
          </Switch>
          <Footer/>
        </div>
      </Provider>
    </Router >
  );
}


export default App;
