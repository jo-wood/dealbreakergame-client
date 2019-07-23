import React, { Component } from 'react';
import Question from './Question'
require('dotenv').config({ path: '../../' })

class Game extends Component {
  constructor() {
    super();
    this.state = { questions: null }
  }
  
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/questions`)
    const json = await response.json();
    await this.setState({ questions: json })
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
    const { questions } = this.state;
    const question = questions ? (this.renderQuestion(questions)) : (<h3>Loading Question ...</h3>)
    return (
      <div>
        { question }
      </div>
    );
  }

}

export default Game;