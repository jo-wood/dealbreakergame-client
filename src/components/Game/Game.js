import React, { Component } from 'react';
import Question from './Question';
import Host from './Host';
import GameTimer from './GameTimer';
import Footer from '../Footer/Footer';
import { Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
import  dummyUserPool  from './io_dummy_userPool'
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,
      userPool: dummyUserPool,
      showMembers: false,
      currentQuestionData: null,
      questionCount: 1,
      timerTime: undefined,
      gameOver: false
    }
  }

  toggle = () => {
    const {showMembers} = this.state;
    this.setState({
      showMembers: !showMembers
    });
  }

  _handleSocketMessage(type, payload) {
    const { questionCount, user_id, userPool} = this.state;
    switch (type) {
      case 'initializeGame':
      case 'NextGameRoomQuestion':
        this.setState({
          currentQuestionData: payload,
          questionCount: questionCount + 1
        });
        break;
      case 'gameRoomTimer':
        this.setState({ timerTime: payload });
        break;
      case 'userPool':
        this.setState({ userPool: payload });
        break;
      case 'userMatchPerQuestion':
        let users = Object.keys(userPool);
        //remove dummy and use payload instead when not in dev
          let matchDetails = payload[user_id];
          for ( let user of users) {
            userPool[user] = {
              match: matchDetails[user]
            }
          }

        break;
      case 'gameOver':
        this.setState({  gameOver: true });
        break                         
      default:
        console.log('socket message', type);       
        break;
    }
  }

  _getUserInfo() {
    let userInfo = {};
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    // just send id and pic so that sockets can broadcast this data back on all current users for GameMembers Component
    // use dummy user_id since Jo not signed in yet and user_id is null
    const user_id = currentUser.user_id || 2 ;
    userInfo[user_id] = currentUser.profile_picture;
    this.setState({ user_id })
    this.socket.emit('newUser', (userInfo));
  }

  componentDidMount() {
    this.socket = io('http://localhost:5001');
    this._getUserInfo();
      //! load secret triggerStart key for dev:
      this.socket.emit('triggerStart', ('true'));
    // this.socket.on('userPool', (userPoolData) => this._handleSocketMessage('userPool', userPoolData));
    this.socket.on('initializeGame', (startData) => this._handleSocketMessage('initializeGame', startData));
    this.socket.on('gameRoomTimer', (timerTime) =>  this._handleSocketMessage('gameRoomTimer', timerTime));
    this.socket.on('NextGameRoomQuestion', (questionData) => this._handleSocketMessage('NextGameRoomQuestion', questionData));
    // this.socket.on('userMatchPerQuestion', (usersAnswers) => this._handleSocketMessage('userMatchPerQuestion', usersAnswers));
    this.socket.on('gameOver', (gameOver) => this._handleSocketMessage('gameOver', gameOver));
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
    const { currentQuestionData, timerTime, userPool, gameOver, user_id, showMembers } = this.state;
    const renderQ = (currentQuestionData) && (<Question key={currentQuestionData.id} _submitAnswer={this._submitAnswer} q={currentQuestionData} />)
    const sendResults = (gameOver) && ( < Redirect to= '/results' currentUser={ user_id } /> );
    
    return (
      <div>
        { sendResults }
        <Helmet>
            <meta charSet="utf-8" />
            <title>Live Game</title>
            <meta name="description" content="Dealbreaker Game is live and matches are being made" />
        </Helmet>
        <Host/>
        { renderQ }
        <button>Dealbreaker</button>        
        <GameTimer timeLeft={ timerTime }/>
        <button onClick={this.toggle}>Show Contestents</button>                  
        <Footer route={'game'} toggle={showMembers} userPool={userPool} />
      </div>
    );
  }

}

export default Game;