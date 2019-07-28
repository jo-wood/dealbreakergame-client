import React, { Component } from 'react';

class Option extends Component {

  render() {
    const {  option, id } = this.props;
      return (
        <div>
          <input
            key={id}
            name={option}
            type="checkbox"/>
          <label id={id}>{option}</label>
        </div>
      );
  }
}
export default Option;