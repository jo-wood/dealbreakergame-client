import React, { Component } from 'react';
import CountDown from './CountDown';
import ChatRoom from './ChatRoom';

require('dotenv').config({ path: '../../' })

class Waiting extends Component {
  render() {
    return (
      <div>
          <h2>The Game Breaks Out at <br /><span>8:00 PM</span></h2>
            <CountDown />
            <ChatRoom />
      </div>
    );
  }
}
export default Waiting;