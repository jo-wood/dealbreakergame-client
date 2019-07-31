import React, { Component } from 'react';
import Result from './SingleResult';
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
// import dummyRankedMatches from './socketMessages/finalRankMatches'
// import dummyUserInfo from './socketMessages/usersProfiles';

class Host extends Component {
  constructor() {
    super();
    this.state= {
      user_id: null,
      rankedMatches: null,
      grabMatchesInfo: null
    }
  }

  _handleMatchResults({ rankedMatches, grabMatchesInfo } ) {
      const thisUser = rankedMatches;
      const firstMatch = thisUser[0];
      const secondMatch = thisUser[1];
      const thirdMatch = thisUser[2];      
      this.setState({ 
        rankedMatches: [firstMatch, secondMatch, thirdMatch],
        grabMatchesInfo: grabMatchesInfo
      })
  } 
  matchResults() {
    const { rankedMatches, grabMatchesInfo } = this.state;
    if (!rankedMatches) {
      return (
        <div className="Main">
          <div class="lds-heart"><div></div></div> 
          <h2> Calculating your top matches!.... </h2>
        </div>
      )
    } else {
      return rankedMatches.map(match => {
        const match_user_id = Object.keys(match);
        const matchPercent = match[match_user_id];
        const matchInfo = grabMatchesInfo[match_user_id];
        const name = matchInfo.full_name;
        const insta = matchInfo.insta_id;
        const image = matchInfo.image_url;
        return (
          <div className="oneResult">
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
    this.setState({ user_id })   
    this.socket = io('http://localhost:5001');
    this.socket.on('userMatches', (userMatches) => {
      this._handleMatchResults(userMatches);
    });
  }
  render() {
    const results = (<div>{this.matchResults()}</div>);
    return (
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Results</title>
            <meta name="description" content="Today's Game results for signed in users. See who you have matched with" />
          </Helmet>
      <div className="Main">
        {results}
      </div>
      </div>
    );
  }
}

export default Host;