import React, { Component } from 'react';

class Option extends Component {

  render() {
    const {  option, id } = this.props;
      return (
        <div className="hiddenCB">
          <input
            key={id}
            name={option}
            type="checkbox"/>
          <p id={id}>{option}</p>
        </div>
      );
  }
}
export default Option;