import React, { Component } from 'react';

class Question extends Component {  
  render() {
    const { q } = this.props;
    return (
      <div>
        <h4>{ q.question }</h4>
        <ul>
          <li>{ q.optionA }</li>
          <li>{ q.optionB }</li>
          <li>{ q.optionC }</li>
          <li>{ q.optionD }</li>

        </ul>

      </div>
    );
  }

}

export default Question;