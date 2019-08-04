import React, { Component } from 'react';
import UserDetails from './UserDetails';
import {Helmet} from "react-helmet";

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
          <Helmet>
              <meta charSet="utf-8" />
              <title>User Details</title>
              <meta name="description" content="New user information is required before dealbreaker can be played" />
          </Helmet>
          <h2>About You</h2>
          <p>Tell us a few details about yourself</p>
          <UserDetails/>
      </div>
    );
  }
}
export default SignUp;