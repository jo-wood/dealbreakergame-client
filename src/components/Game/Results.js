import React, { Component } from 'react';
import Result from './SingleResult';
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
import dummyRankedMatches from './socketMessages/finalRankMatches'
import dummyUserInfo from './socketMessages/usersProfiles';

class Host extends Component {
  constructor() {
    super();
    this.state= {
      // set initial to empty object
      rankedMatches: dummyRankedMatches[2],
      // set initial to empty array
      grabMatchesInfo: dummyUserInfo
    }
  }

  _handleMatchResults() {
    const { rankedMatches, grabMatchesInfo } = this.state;
    if (!rankedMatches) {
      return (
        <div className="loader">
          <h2>Calculating your top matches!....</h2>
        </div>
      )
    } else {
      const matches = Object.entries(rankedMatches)
      return matches.map(match => {
        const match_user_id = match[0];
        const matchPercent = match[1];
        const matchInfo = grabMatchesInfo[match_user_id];
        const name = matchInfo.full_name;
        const insta = matchInfo.insta_id;
        const image = matchInfo.image_url;

        return (
          <div>
            <Result key={match_user_id} matchData={{ image, name, insta, matchPercent }}/>
          </div>
        )
    })
  }
}


  componentDidMount() {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    const user_id = currentUser.user_id || 2 ;    
    this.socket = io('http://localhost:5001');
    this.socket.on('userMatches', (userMatches) => {
      const thisUser = userMatches[user_id];
      this.setState({ 
        rankedMatches: thisUser,
        grabMatchesInfo: userMatches['some_key_that_gives_me_dummy_user_info']
      })
    });
  }

  render() {
    const results = (<div>{this._handleMatchResults()}</div>);
    return (
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Results</title>
            <meta name="description" content="Today's Game results for signed in users. See who you have matched with" />
          </Helmet>
      {results}
      </div>
    );
  }
}

export default Host;