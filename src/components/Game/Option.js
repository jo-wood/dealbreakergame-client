import React, { Component } from 'react';

class Option extends Component {
  _handleClick(e) {
    const selectedAnswer = e.target.previousSibling;
    const answer = selectedAnswer.getAttribute("id");
    console.log(answer)
  }


  render() {
    const {  option, id, submit} = this.props;
      return (
        <div>
          <input
            id={id}
            name={option}
            type="checkbox"/>
          <label
            htmlFor={option}
            onClick={this._handleClick} >
            {option}
          </label>
        </div>
      );
  }
}
export default Option;