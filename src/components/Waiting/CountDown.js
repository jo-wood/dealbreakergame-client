import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CountClock from './CountClock'

class CountDown extends Component {
    constructor(props) {
      super(props);
        this.state = {
          nextGameStarts: new Date(Date.now()).setHours(20, 0, 0, 0),
          moveIntoGame: false,
          hours: 99,
          minutes: 99,
          seconds: 99
      }
    }


    componentDidMount() {
      const { hours, minutes, seconds, nextGameStarts } = this.state;
      this.interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
          this.setState({ moveIntoGame: true })
          this.stop(nextGameStarts);
      }
      this.calculateCountdown();
      }, 1000);
    }
      componentWillUnmount() {
        this.stop();
      }

  stop(currentGame) {
    const nextDate = new Date(currentGame);
    //set to tomorrow at 8 PM
    const tomorrow = nextDate.setDate(nextDate.getDate() + 1);
    clearInterval(this.interval);
    this.setState({
      nextGameStarts: tomorrow,
      moveIntoGame: false,
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }

  calculateCountdown() {
    const {nextGameStarts} = this.state;
    let hours = new Date(nextGameStarts).getHours() - new Date(Date.now()).getHours();
    let minutes = 60 - new Date(Date.now()).getMinutes();
    let seconds = 60 - new Date(Date.now()).getSeconds();
    this.setState({
      hours,
      minutes,
      seconds 
    })
  }

  render() {
    const {hours, minutes, seconds, moveIntoGame} = this.state;
    const countdown = (moveIntoGame) ? 
      (<div><Redirect to="/game" /></div>) :
        (<div><CountClock countdown={{ hours, minutes, seconds}} /></div>)
        
    return (
      <div>
        {countdown}
      </div>
    );
  }
}
export default CountDown;