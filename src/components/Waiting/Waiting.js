import React, { Component } from 'react';
import CountDown from './CountDown';
import ChatRoom from './ChatRoom';

require('dotenv').config({ path: '../../' })

class Waiting extends Component {
  render() {
    return (
      <div>
          <h2>The Game Breaks Out At 8PM</h2>
            <CountDown />
            {/* <ChatRoom /> */}
      </div>
    );
  }
}
export default Waiting;