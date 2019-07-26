import React from 'react';
import './styles/main.scss';
import './styles/question.css';
import './styles/profile.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
//import Login from './components/Login';
import Game from './components/Game/Game'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privacy from './components/Footer/Privacy';
import Profile from './components/Profile/Profile';
import Loading from './components/Home/Loading';
import Footer from './components/Footer/Footer';
import Waiting from './components/Waiting/Waiting';
import SignUp from './components/Home/SignUp';

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
            <Route path="/waiting" exact component={Waiting}/>
            <Route path="/signup" exact component={SignUp}/>
          </Switch>
          <Footer/>
        </div>
      </Provider>
    </Router >
  );
}


export default App;
