import React, { Component } from 'react';
import ChatRoom from './ChatRoom';
import CountDown from './CountDown';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      users: null,
    }
  }

  render() {
    return (
      <div>
        <h2>The Game Breaks Out At 8 PM</h2>
        <CountDown/>
        <ChatRoom/>
      </div>
    );
  }
}

export default Game;