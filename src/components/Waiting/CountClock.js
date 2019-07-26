import React, { Component } from 'react';

class CountClock extends Component {

  addLeadingZeros(value) {
    while (String(value).length < 2) {
      return '0' + value;
    }
  }
  checkCountType(time, timeType) {
    return (
      <div className="Countdown-col-element">
          <strong>{this.addLeadingZeros(time)}</strong>
          <span>{timeType}</span>
      </div>
    )
  }
  render() {
    const { hours, minutes, seconds } = this.props.count;
    const hour = (<div>{this.checkCountType(hours, 'HOURS')}</div>);
    const min = (<div>{this.checkCountType(minutes, 'MINS')}</div>);
    const sec = (<div>{this.checkCountType(seconds, 'SECONDS')}</div>);
    return (
      <div>
        <div className="Countdown-col">{hour}</div>
        <div className="Countdown-col">{min}</div>
        <div className="Countdown-col">{sec}</div>
      </div>
    );
  }
}
export default CountClock;