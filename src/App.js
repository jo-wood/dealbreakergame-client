import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// ------ Unstated
import { Provider } from 'unstated';
// components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
// import Privacy from './components/Footer/Privacy';
import Footer from './components/Footer/Footer';
// import ChatPrompt from './components/Footer/ChatPrompt';
import Profile from './components/Profile/Profile';
import Loading from './components/Home/Loading';
import Waiting from './components/Waiting/Waiting';
import SignUp from './components/Home/SignUp';
import Results from './components/Game/Results';
import Logout from './components/Profile/Logout';
// Page Styles
import './styles/App.scss';
import './styles/Game.scss';
import './styles/Waiting.css';
// Util Styles
import './styles/question.css';
import './styles/loader.css';
import './styles/user_img_icon.css';
import './styles/nav_img.css';

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
              <Route path="/logout" exact component={Logout}/>
            </Switch>
          <Footer />
        </div>
      </Provider>
    </Router >
  );
}


export default App;
