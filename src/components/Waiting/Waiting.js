import React, { Component } from 'react';
import ReactCountdown from 'react-countdown-now'; //react count down now
import ChatRoom from './ChatRoom';
import {Helmet} from "react-helmet";

require('dotenv').config({ path: '../../' })

class Waiting extends Component {
  constructor() {
    super();
    this.state = {
      nextGameTime: new Date(2019, 6, 28, 20, 0, 0)
    }
  }
  
  render() {
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
      </div>
    );
  }
}
export default Waiting;