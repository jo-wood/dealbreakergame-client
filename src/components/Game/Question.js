import React, { Component } from 'react';

class Question extends Component {  
  render() {
    const { q } = this.props;
    return (
      <div class="hiddenCB">
        <div>
          <h1>{q.context}</h1>
          <input name={q.id} id="cb1" type="checkbox"/><label for="cb1">{q.optionA} </label>
          <input name={q.id} id="cb2" type="checkbox"/><label for="cb2">{q.optionB}</label>
          <input name={q.id} id="cb3" type="checkbox"/><label for="cb3">{q.optionC}</label>
          <input name={q.id} id="cb4" type="checkbox"/><label for="cb4">{q.optionD}</label>
        </div>   
      </div>   
    );
  }

}

export default Question;