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

  _handleMatchResults = ({ rankedMatches, grabMatchesInfo } ) => {
    console.log("rankedMatches:",rankedMatches,", grabMatchesInfo: ",grabMatchesInfo);
      const currentUser = this.state.user_id;
      const matchesArray = rankedMatches[currentUser].slice(0, 3);      
      this.setState({ 
        rankedMatches: matchesArray,
        grabMatchesInfo: grabMatchesInfo
      })
  } 
  matchResults() {
    const { rankedMatches, grabMatchesInfo } = this.state;
    console.log("STATE: ",rankedMatches, grabMatchesInfo)
    if (!rankedMatches) {
      return (
        <div className="Main">
          <div class="lds-heart"><div></div></div> 
          <h2> Calculating your top matches!.... </h2>
        </div>
      )
    } else {
      return rankedMatches.map(match => {
        console.log("MAPPED MATCH: ", match)
        const match_user_id = Object.keys(match);
        const matchPercent = match[match_user_id];
        const matchInfo = grabMatchesInfo[match_user_id];
        const name = matchInfo.full_name;
        const insta = matchInfo.insta_id;
        const image = matchInfo.img;
        const username = matchInfo.username;
        return (
          <div className="oneResult">
            <Result key={match_user_id} matchData={{ image, name, insta, matchPercent, username }}/>
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
      console.log("Server sent final game Data: ", userMatches);
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