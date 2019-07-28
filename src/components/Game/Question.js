import React, { Component } from 'react';
import Option from './Option'

class Question extends Component {

  _renderOptions(question) {
    const { optionA, optionB, optionC, optionD } = question;
    const submitAnswer = this.props.submit;
    const options = [ optionA, optionB, optionC, optionD ];
    const ans = [ 'optionA', 'optionB', 'optionC', 'optionD' ];
    let optionId = 0;    
    return options.map(option => {
      let option_id = ans[optionId];
      optionId++;
      return (
          <Option id={option_id } submit={ submitAnswer } option={option} />
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