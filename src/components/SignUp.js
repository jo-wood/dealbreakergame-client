import React, { Component } from 'react';
import UserDetails from './UserDetails';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      chatlog: null,
    }
  }

  render() {
    return (
      <div>
          <h2>About You</h2>
          <p>Tell us a few details about yourself</p>
          <UserDetails/>
      </div>
    );
  }
}

export default SignUp;