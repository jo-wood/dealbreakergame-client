import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { Component } from 'react';

class GameTimer extends Component {
  constructor() {
    super();
    this.state = {
      chatlog: null,
    }
  }

  render() {
      const value = 9;
    return (
      <div>
          <CircularProgressbar value={value} maxValue={15} text={value} height={"15px"} />
      </div>
    );
  }
}

export default GameTimer;