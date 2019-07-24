import React from 'react';
import './styles/main.scss';
import './styles/question.css';
import Nav from './components/Nav';
import Home from './components/Home';
//import Login from './components/Login';
import Game from './components/Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privacy from './components/Privacy';
import Profile from './components/Profile';
import Loading from './components/Loading';
import Footer from './components/Footer';
import WaitingRoom from './components/WaitingRoom';

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
            <Route path="/login" exact component={Home} />
            <Route path="/loading" exact component={Loading}/>
            <Route path="/game" exact component={Game} />
            <Route path="/privacy" exact component={Privacy}/>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
          <Footer/>
        </div>
      </Provider>
    </Router >
  );
}


export default App;
