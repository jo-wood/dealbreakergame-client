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
    this.socket = io(process.env.REACT_APP_SOCKET_SERVER_URL || 'http://localhost:5001');
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
      <div className="Main">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Waiting Room</title>
            <meta name="description" content="Waiting room page for Dealbreaker game, game is only avaliable after 8 PM local time" />
          </Helmet>
      <div className="Waiting">
          <h2>The Game Breaks Out at  <br />
            <span className="bold">
            8:00 PM <br /></span> 
          </h2>
      </div>
      <ReactCountdown
          date={this.state.nextGameTime}
          renderer={props => {
            return (
              <div className="clock">    
                  <div className="clock-col">
                    {props.hours}
                  </div> 
                  <span className="colon">:</span>
                  <div className="clock-col">
                    {props.minutes}
                  </div>
                  <span className="colon">:</span>
                  <div className="clock-col">
                    {props.seconds}
                  </div>
              </div>
            )}
          }
      />
      <ChatRoom />
        {gameStarted && <Redirect to='/game' />  }
      </div>
    );
  }
}
export default Waiting;