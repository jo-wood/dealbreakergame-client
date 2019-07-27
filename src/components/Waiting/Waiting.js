import React, { Component } from 'react';
import CountDown from './CountDown';
import ChatRoom from './ChatRoom';
import {Helmet} from "react-helmet";

require('dotenv').config({ path: '../../' })

class Waiting extends Component {
  render() {
    return (
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Waiting Room</title>
            <meta name="description" content="Waiting room page for Dealbreaker game, game is only avaliable after 8 PM local time" />
          </Helmet>
          <h2>The Game Breaks Out at <br /><span>8:00 PM</span></h2>
            <CountDown />
            <ChatRoom />
      </div>
    );
  }
}
export default Waiting;