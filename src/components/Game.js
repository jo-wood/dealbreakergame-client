import React, { Component } from 'react';
import Question from './Question';
import Host from './Host';
import GameTimer from './GameTimer';
import GameMembers from './GameMembers'
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor() {
    super();
    this.state = {
      showMembers: true,
      questions: null,
      current_question: 0,
      timerTime: 15,
      game_over: false
    }
  }

  toggle = () => {
    this.setState({
      showMembers: !this.state.showMembers
    });
  };

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/questions`)
    const json = await response.json();
    await this.setState({ questions: json });
    this.interval = setInterval(() => this.setState({ timerTime: this.state.timerTime - 1 }), 1000);
    
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderQuestion(questions) {
    return questions.map(question => {
      return (
        <div>
          <Question key={question.id} q={question} />
        </div>
      )
    });

  }

  render() {
    const { questions, timerTime } = this.state;
    const question = questions ? (this.renderQuestion(questions)) : (<h3>Loading Question ...</h3>)
    if (this.state.timerTime === 0 && this.state.current_question <= 9){
      this.setState({
        timerTime: 15,
        current_question: this.state.current_question + 1});
    } else if (this.state.current_question === 10) {
      this.setState({game_over: true})
    }
    return (
      <div>
        <Host/>
        { question[this.state.current_question]}
        <GameTimer timeLeft={timerTime}/>
        <button>Dealbreaker</button>
        <button onClick={this.toggle}>Show Contestents</button>
        {this.state.showMembers && <GameMembers/>}
      </div>
    );
  }

}

export default Game;