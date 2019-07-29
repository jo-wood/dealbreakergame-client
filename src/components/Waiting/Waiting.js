import React, { Component } from 'react';
import ReactCountdown from 'react-countdown-now'; //react count down now
import ChatRoom from './ChatRoom';
import {Helmet} from "react-helmet";
import { Redirect } from 'react-router-dom'
import io from 'socket.io-client';

require('dotenv').config({ path: '../../' })

class Waiting extends Component {
  constructor() {
    super();
    this.state = {
      nextGameTime: null,
      gameStarted: false
    }
  }

  async componentDidMount() {
    this.socket = io('http://localhost:5001');
    this.socket.on('setNextGameTime', (nextGameTime) => this._handleSocketMessage('setNextGameTime', nextGameTime));
    this.socket.on('gameStarted', (gameStarted) => this._handleSocketMessage('gameStarted', gameStarted));
  }

  _handleSocketMessage = (type, payload) => {
    switch (type) {
      case 'setNextGameTime':
        this.setState({ nextGameTime: payload });
        break;
      case 'gameStarted':
        this.setState({ gameStarted: true });
        break;
      default:
        console.log('incoming socket message:', payload);
        break;
    }
  }

  render() {
    const { gameStarted } = this.state;
    return (
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Waiting Room</title>
            <meta name="description" content="Waiting room page for Dealbreaker game, game is only avaliable after 8 PM local time" />
          </Helmet>
          <h2>The Game Breaks Out at <br /><span>8:00 PM</span></h2>
            <ReactCountdown
              date={this.state.nextGameTime}
              renderer={props => <div className="nextGameCountdown">{props.hours} : {props.minutes} : {props.seconds}</div>}
              />
            <ChatRoom />
        {gameStarted && <Redirect to='/game' />  }
      </div>
    );
  }
}
export default Waiting;