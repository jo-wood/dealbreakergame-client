import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';
import WaitingContainer from '../../containers/WaitingContainer';
import CountClock from './CountClock'

class CountDown extends Component {
  state = {
      nextGameStarts: new Date(Date.now()).setHours(20, 0, 0, 0),
      timeLeftStamp: Date.now(),
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  // note that since 1 day seperates the countdown, the actual date rendered by the date is only for time keeping

  countdown(hours, minutes, seconds) {
    this.setState({
      hours,
      minutes,
      seconds
    })
  };

  calculateCountdown() {
    let { nextGameStarts } = this.state;
    console.log(nextGameStarts);
    let { timeLeftStamp } = this.state;

    //difference in seconds
    let hours = new Date(nextGameStarts).getHours() - new Date(timeLeftStamp).getHours() ;
    let minutes = new Date(nextGameStarts).getMinutes() - new Date(timeLeftStamp).getMinutes() ;
    let seconds = new Date(nextGameStarts).getSeconds() - new Date(timeLeftStamp).getSeconds() ;

    this.countdown(hours, minutes, seconds);
    this.checkCountdown(nextGameStarts)

  }

  checkCountdown(nextGameStarts, setNextGame) {
    const {hours, minutes, seconds} = this.state;
    if (Date.now() > nextGameStarts){
      setNextGame();
    } else {
      return (
        <div>
          <CountClock count={{hours, minutes, seconds}} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
            return (
              <div>
                {this.calculateCountdown}
              </div>
            )}
      </div>
    );
  }
}
export default CountDown;