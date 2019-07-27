import React, { Component } from 'react';
import SingleResult from './SingleResult';

class Host extends Component {
  constructor() {
    super();
    this.state = {
      chatlog: null,
    }
  }

  render() {
    return (
      <div>
          <SingleResult/>
      </div>
    );
  }
}

export default Host;