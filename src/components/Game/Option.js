import React, { Component } from 'react';

class Option extends Component {
  _handleClick() {
    const { option, q_id } = this.refs;
    const _submitAnswer = this.props.submit;
    _submitAnswer({ q_id, option });
  }
  render() {
    const { key, option } = this.props;
      return (
        <div>
          <input 
            key={key}
            onClick={this._handleClick} 
            type="checkbox"/>
          <label for={option}>{option}</label>
        </div>
      );
  }
}
export default Option;