import React, { Component } from 'react';
import Question from './Question';
import Host from './Host';
import GameTimer from './GameTimer';
import GameMembers from '../Footer/GameMembers';
import { Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor() {
    super();
    this.state = {
      user_id: '',
      userPool: {},
      showMembers: false,
      storeUserQandA: null,
      questions: null,
      currentQuestionData: null,
      questionCount: 1,
      timerTime: null,
      game_over: false
    }
  }

  toggle = () => {
    const {showMembers} = this.state;
    this.setState({
      showMembers: !showMembers
    });
  };

  _handleSocketMessage(type, payload) {
    switch (type) {
      case 'initializeGame':
        this.setState({
          currentQuestionData: payload,
        });
        break;
      case 'gameRoomTimer':
        this.setState({
          timerTime: payload
        });        
        break;
      case 'NextGameRoomQuestion':
        this.setState({
          currentQuestionData: payload,
        });        
        break;
      default:
        console.log('socket message', type);       
        break;
    }
  }

  componentDidMount() {
    this.socket = io('http://localhost:5001');
    const socket = this.socket;
    
    socket.emit('gameStarted');

    socket.on('initializeGame', (startData) => {
      this._handleSocketMessage('initializeGame', startData);
    });

    socket.on('gameRoomTimer', (timerData) => {
      this._handleSocketMessage('gameRoomTimer', timerData);
    });

    socket.on('NextGameRoomQuestion', (questionData) => {
      this._handleSocketMessage('NextGameRoomQuestion', questionData);
    });
  }
  _submitAnswer(q_id, answer) {
    const { currentQuestionData, user_id } = this.state;
    const sendAnswer = {};
    const optionA = currentQuestionData['optionA'],
          optionB = currentQuestionData['optionB'],
          optionC = currentQuestionData['optionC'],
          optionD = currentQuestionData['optionD'];
    switch (answer) {
      case optionA:
        sendAnswer[q_id][user_id] = 'optionA' ;
        break;
      case optionB:
        sendAnswer[q_id][user_id] = 'optionB';
        break;
      case optionC:
        sendAnswer[q_id][user_id] = 'optionC';
        break;
      case optionD:
        sendAnswer[q_id][user_id] = 'optionD';
        break;
      default:
        sendAnswer[q_id] =  { user_id: undefined } ;
        break;                          
    }
    console.log('sendAnswer to socket:', sendAnswer)    
  }

  render() {
    const { currentQuestionData, questionCount, timerTime, showMembers } = this.state;
    const renderQ = currentQuestionData ? (<div><Question submit={this._submitAnswer} q={currentQuestionData} /></div>) : ( <h3> Loading Question... </h3>)
    const toggleContestents = showMembers && (<div><GameMembers/></div>);
    const gameOver = (questionCount === 10) && (<div><Redirect to='/results'/></div>);
    
    return (
      <div>
        {gameOver}
        <Helmet>
            <meta charSet="utf-8" />
            <title>Live Game</title>
            <meta name="description" content="Dealbreaker Game is live and matches are being made" />
        </Helmet>
        <Host/>
        { renderQ }
        <GameTimer timeLeft={ timerTime }/>
        <button>Dealbreaker</button>
        <button onClick={this.toggle}>Show Contestents</button>        
        {toggleContestents}
      </div>
    );
  }

}

export default Game;