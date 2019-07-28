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
  constructor(props) {
    super(props);
    this.state = {
      user_id: 8,
      userPool: {},
      showMembers: false,
      storeUserQandA: null,
      questions: null,
      currentQuestionData: null,
      questionCount: 1,
      timerTime: undefined,
      game_over: false
    }
  }

  toggle = () => {
    const {showMembers} = this.state;
    this.setState({
      showMembers: !showMembers
    });
  }

  _handleSocketMessage(type, payload) {

    switch (type) {
      case 'initializeGame':
        this.setState({
          currentQuestionData: payload,
          questionCount: this.state.questionCount + 1
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
          questionCount: this.state.questionCount + 1
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
    
    if (this.state.questionCount === 1) {
      socket.emit('gameStarted');
      socket.on('initializeGame', (startData) => {
        this._handleSocketMessage('initializeGame', startData);
      });
    }

    socket.on('gameRoomTimer', (timerTime) => {
      this._handleSocketMessage('gameRoomTimer', timerTime);
    });

    socket.on('NextGameRoomQuestion', (questionData) => {
        this._handleSocketMessage('NextGameRoomQuestion', questionData);
    });
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
    const { currentQuestionData, questionCount, timerTime, showMembers } = this.state;
    const renderQ = (currentQuestionData) && (<Question key={currentQuestionData.id} _submitAnswer={this._submitAnswer} q={currentQuestionData} />)
    const toggleContestents = showMembers && (<GameMembers/>);
    const gameOver = (questionCount === 10) && (<Redirect to='/results'/>);
    
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