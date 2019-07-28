import React, { Component } from 'react';
import SingleResult from './SingleResult';
import {Helmet} from "react-helmet";

class Host extends Component {

  _handleMatchResults(matches) {
  }


  componentDidMount() {
    this.socket = io('http://localhost:5001');
    this.socket.on('userMatches', (userMatches) => this._handleMatchResults('userMatches', userMatches));
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