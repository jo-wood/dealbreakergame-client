import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';
import WaitingContainer from '../../containers/WaitingContainer';
import CountClock from './CountClock'

class Countdown extends Component {
  // note that since 1 day seperates the countdown, the actual date rendered by the date is only for time keeping
  state = {
      timeLeftStamp: Date.now(),
      gameStartTime: null,
      reset: false
  }
  calculateCountdown({ state }) {
    let { nextGameStarts, setNextGame } = state;
    let { reset, gameStartTime, timeLeftStamp} = this.state;
    let diff = (gameStartTime - timeLeftStamp) / 1000;
    if (diff > 0) {
      let increaseOneSecond = timeLeftStamp.setSeconds(timeLeftStamp.getSeconds() + 1);
      this.setState({
        timeLeftStamp: increaseOneSecond
      })
    }
    if (diff === 0) {
      setNextGame();
      this.setState({
        reset: true
      });
    } 
    if (reset) {
      this.setState({
        gameStartTime: nextGameStarts,
        reset: false
      });
    }
  }
  render() {
    const { timeLeftStamp, reset} = this.state;
    const newGame = reset ? 
      (<div><Redirect to='/game' /></div>) :
        (<div className="Countdown"><CountClock count={timeLeftStamp}/></div>)
    return (
      <div className="Countdown">
        <Subscribe to={[WaitingContainer]}>
          {waitingContainer => (
            <div>
              {this.calculateCountdown(waitingContainer)}
            </div>
          )}
          {newGame}
        </Subscribe>
      </div>
    );
  }
}
export default Countdown;