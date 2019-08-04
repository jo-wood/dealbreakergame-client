import React, { Component } from 'react';
import Question from './Question';
import Host from './Host';
import GameTimer from './GameTimer';
import GameFooter from '../Footer/GameFooter';
import { Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      userPool: {},
      showMembers: false,
      currentQuestionData: null,
      gif_url: "https://giphy.com/embed/xUA7baCMQfFkvG5BdK",
      questionCount: 1,
      timerTime: undefined,
      gameOver: false,
      errorMessage: false
    }
  }
  toggle = () => {
    const {showMembers} = this.state;
    if (showMembers) {
      this.setState({
        showMembers: false
      });
    } else {
      this.setState({
        showMembers: true
      });
    }
  }
  _handleSocketMessage(type, payload) {
    const { questionCount, user_id, userPool} = this.state;
    switch (type) {
      case 'initializeGame':
      case 'NextGameRoomQuestion':
        this.setState({
          currentQuestionData: payload,
          gif_url: payload.gif_url,
          questionCount: questionCount + 1
        });
        break;
      case 'gameRoomTimer':
        this.setState({ timerTime: payload });
        break;
      // case 'sendUserInfo':
      //   if (payload === "true") {
      //   }
      //   break;
      case 'userPool':
        this.setState({ userPool: payload });
        break;
      case 'perQMatches':
        let matchDetails = payload[user_id];
        const updatePool = new Promise( (resolve, reject) => {
          const newUserPool = {
          test: true
          };
          for (let matchUser in matchDetails) {
            if (userPool.hasOwnProperty(matchUser)) {
              newUserPool[matchUser] = {
                img: this.state.userPool[matchUser].img,
                match: matchDetails[matchUser]
              }
            }
          }
          resolve(newUserPool);
        });
        updatePool.then( (newPool) => {
          this.setState({userPool: newPool}, () => {
          });
        });
        break;
      case 'gameOver':
        this.setState({  gameOver: true });
        break                         
      default:
        console.log('socket message', type);       
        break;
    }
  }
  _getUserInfo = () => {
    let userInfo = {};
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    if (currentUser) {
      let user_id = currentUser.user_id;
      if (user_id === null) {
        user_id = 2;
      }
      userInfo = {
        user_id: user_id,
        profile_picture: currentUser.profile_picture,
        full_name: currentUser.full_name,
        instagram_id: currentUser.instagram_id,
        username: currentUser.username
      }
      this.setState({ user_id })
      this.socket.emit('newUser', userInfo);
    } else {
      this.setState({
        errorMessage: "You must be signed up or logged in order to play! "
      })
    }
  }
  componentDidMount = () => {
    this.socket = io(process.env.REACT_APP_SOCKET_SERVER_URL || 'http://localhost:5001');
    this._getUserInfo();
    this.socket.on('sendUserInfo', (userCall) => this._handleSocketMessage('sendUserInfo', userCall));  
    this.socket.on('userPool', (userPoolData) => this._handleSocketMessage('userPool', userPoolData));
    this.socket.on('initializeGame', (startData) => this._handleSocketMessage('initializeGame', startData));
    this.socket.on('gameRoomTimer', (timerTime) =>  this._handleSocketMessage('gameRoomTimer', timerTime));
    this.socket.on('NextGameRoomQuestion', (questionData) => this._handleSocketMessage('NextGameRoomQuestion', questionData));
    this.socket.on('gameOver', (gameOver) => this._handleSocketMessage('gameOver', gameOver));
    this.socket.on('perQMatches', (usersAnswers) => this._handleSocketMessage('perQMatches', usersAnswers));
  }
  _submitAnswer = (answer) => {
    const { currentQuestionData, user_id } = this.state;
    let userAnswer = {
      q_id: currentQuestionData.id,
      user_id,
      answer
    }
    this.socket.emit('userAnswer', userAnswer);
  }

  render() {
    const { errorMessage, currentQuestionData, timerTime, userPool, gameOver, user_id, showMembers } = this.state;
    console.log("STATE 1 AM: ",this.state)
    const renderQ = (currentQuestionData) && (<Question key={currentQuestionData.id} _submitAnswer={this._submitAnswer} q={currentQuestionData} />)
    const sendResults = (gameOver) && ( <Redirect to= '/results' user_id={ user_id } /> );
  return (
    <div>
      { sendResults }
      <Helmet>
          <meta charSet="utf-8" />
          <title>Live Game</title>
          <meta name="description" content="Dealbreaker Game is live and matches are being made" />
      </Helmet>
      <div className="Main">
      { (!errorMessage) ? 
        ( 
        < div >
          <Host gif={this.state.gif_url}/>
          {renderQ}
          <GameTimer timeLeft={ timerTime }/>
            <button className="hideInFooter" onClick={this.toggle}><i class="fa fa-chevron-up"></i></button>                
          <GameFooter route={'game'} toggle={showMembers} userPool={userPool} />
        </div>
        ) :
        (
          <div>
            <h1>{errorMessage}</h1>
          </div>
        )
      }
      </div>
    </div>
    );
  }
}
export default Game;