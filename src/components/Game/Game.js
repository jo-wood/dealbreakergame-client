import React, { Component } from 'react';
import Question from './Question';
import Host from './Host';
import GameTimer from './GameTimer';
import GameMembers from '../Footer/GameMembers';
import { Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor() {
    super();
    this.state = {
      user_id: '',
      showMembers: true,
      storeUserQandA: null,
      questions: null,
      current_question: '',
      timerTime: 15,
      game_over: false
    }
  }

  toggle = () => {
    this.setState({
      showMembers: false
    });
  };

  gameOver = () => {
    const { timerTime, game_over } = this.state;    
    if (timerTime === 0){
      this.setState({
        timerTime: 15,
        current_question: ''
      });
      return false;
    } else if (game_over) {
      return (
        <Redirect to='/results' />
      )
    }    
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/questions`)
    const json = await response.json();
    await this.setState({ 
      // change this to receive question from socket one at a time ( only will need currentQuestion)
      current_question: json
    });
    this.interval = setInterval(() => this.setState((prevState) => ({ timerTime: prevState.timerTime - 1 })), 1000);   
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _submitAnswer(q_id, answer) {
    const { current_question, user_id } = this.state;
    const sendAnswer = {};
    const optionA = current_question['optionA'],
          optionB = current_question['optionB'],
          optionC = current_question['optionC'],
          optionD = current_question['optionD'];
    switch (answer) {
      case optionA:
        sendAnswer[q_id][user_id] = 'optionA' ;
        break;
      case optionB:
        sendAnswer[q_id][user_id] = 'optionB';
        break;
      case optionC:
        sendAnswer[q_id][user_id] = 'optionC';
        break;
      case optionD:
        sendAnswer[q_id][user_id] = 'optionD';
        break;
      default:
        sendAnswer[q_id] =  { user_id: undefined } ;
        break;                          
    }
    console.log('sendAnswer to socket:', sendAnswer)    
  }

  render() {
    const { current_question, timerTime, showMembers } = this.state;
    const renderQ = current_question ? (<div><Question submit={this._submitAnswer} q={current_question[0]} /></div>) : ( <h3> Loading Question... </h3>)
    const toggleContestents = showMembers && (<div><GameMembers/></div>);

    return (
      <div>
        {this.gameOver()}
        <Helmet>
            <meta charSet="utf-8" />
            <title>Live Game</title>
            <meta name="description" content="Dealbreaker Game is live and matches are being made" />
        </Helmet>
        <Host/>
        { renderQ }
        <GameTimer timeLeft={ timerTime }/>
        <button>Dealbreaker</button>
        <button onClick={this.toggle}>Show Contestents</button>        
        {toggleContestents}
      </div>
    );
  }

}

export default Game;