import React, { Component } from 'react';
import Option from './Option'

class Question extends Component {

  _renderOptions(question) {
    const { id, optionA, optionB, optionC, optionD } = question;
    const _submitAnswer = this.props.submit;
    const options = [ optionA, optionB, optionC, optionD ]
    return options.map(option => {
      return (
        <div>
          <Option key={id} submit={ _submitAnswer } option={option} />
        </div>
      );
    })
  }  
  render() {
    const { q } = this.props;
    const showOptions = (<div>{this._renderOptions(q)}</div>)
    return (
      <div className="hiddenCB">
        <div id={q.id}>
          <h1>{q.context}</h1>
          {showOptions}
        </div>   
      </div>   
    );
  }
}
export default Question;