import React, { Component } from 'react';
import HostPoster from '../../images/host.jpeg';

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
          <img src={HostPoster} height="450px" alt="placeholder for host video"/>
      </div>
    );
  }
}

export default Host;