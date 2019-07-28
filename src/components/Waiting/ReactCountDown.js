import Countdown from 'react-countdown-date';
import React, { Component } from 'react';
 
class ReactCountDown extends Component {
  render() {
    return (
      <Countdown date={ this.props.date }>
        <h2>Hello</h2>
      </Countdown>
    );
  }
}

export default ReactCountDown;