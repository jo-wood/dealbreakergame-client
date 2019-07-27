import React, { Component } from 'react';
import SingleResult from './SingleResult';
import {Helmet} from "react-helmet";

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
          <Helmet>
            <meta charSet="utf-8" />
            <title>Results</title>
            <meta name="description" content="Today's Game results for signed in users. See who you have matched with" />
          </Helmet>
          <SingleResult/>
      </div>
    );
  }
}

export default Host;