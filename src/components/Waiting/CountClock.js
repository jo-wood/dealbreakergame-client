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
    const { count } = this.props;
    const stopWatch = new Date(count);
    const hour = this.checkCountType(stopWatch.getHours(), 'HOURS');
    const min = this.checkCountType(stopWatch.getMinutes(), 'MINS');
    const sec = this.checkCountType(stopWatch.getSeconds(), 'SECONDS');
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