import React, { Component } from 'react';
import Option from './Option'

class Question extends Component {

  _renderOptions(question) {
    const { optionA, optionB, optionC, optionD } = question;
    let optionId = 0;
    const _submitAnswer = this.props.submit;
    const options = [ optionA, optionB, optionC, optionD ]
    return options.map(option => {
      optionId++;
      return (
          <Option key={optionId} submit={ _submitAnswer } option={option} />
      );
    })
  }  
  render() {
    const { q } = this.props;
    const showOptions = (<div>{this._renderOptions(q)}</div>)
    return (
      <div className="hiddenCB">
        <div>
          <h1>{q.context}</h1>
          {showOptions}
        </div>   
      </div>   
    );
  }
}
export default Question;