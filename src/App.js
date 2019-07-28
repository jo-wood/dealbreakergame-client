import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// ------ Unstated
import { Provider } from 'unstated';
// components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
// import Privacy from './components/Footer/Privacy';
// import Footer from './components/Footer/Footer';
// import ChatPrompt from './components/Footer/ChatPrompt';
import Profile from './components/Profile/Profile';
import Loading from './components/Home/Loading';
import Waiting from './components/Waiting/Waiting';
import SignUp from './components/Home/SignUp';
import Results from './components/Game/Results';
// styles
import './styles/main.scss';
import './styles/question.css';
import './styles/Home.scss';

// import './styles/profile.css';

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
              <Route path="/profile" exact component={Profile}/>
              <Route path="/waiting" exact component={Waiting}/>
              <Route path="/signup" exact component={SignUp}/>
              <Route path="/results" exact component={Results}/>
            </Switch>
        </div>
      </Provider>
    </Router >
  );
}


export default App;
