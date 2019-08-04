import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Logout extends Component {
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
          <h2>Thank You for Playing Dealbreaker</h2>
          <p>Next Game will be at 8 PM</p>
          <iframe title="log out" src="https://instagram.com/accounts/logout/" width="0" height="0" />
      </div>
    );
  }
}
export default Logout;