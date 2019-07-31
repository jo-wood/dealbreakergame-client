import React, { Component } from 'react';
import Result from './SingleResult';
import {Helmet} from "react-helmet";
import io from 'socket.io-client';
import dummyRankedMatches from './socketMessages/finalRankMatches'
import dummyUserInfo from './socketMessages/usersProfiles';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      calculating: true
    }
  }

  calculatingMatches() {
    return (
      <div>
        <div className="lds-heart"><div></div></div> 
        <h2> Calculating your top matches!.... </h2>
      </div>
    ); 
  }
  _handleMatchResults() {
    let { user_id } = this.props;
    let currentUser = user_id;
    let rankedMatches = dummyRankedMatches;
    let grabMatchesInfo = dummyUserInfo;
    this.socket = io(process.env.REACT_APP_SOCKET_SERVER_URL || 'http://localhost:5001');
    this.socket.on('userMatches', (userMatches) => {
          let ranks = Object.keys(userMatches.rankedMatches);
          if (ranks.length) {
            rankedMatches = userMatches.rankedMatches;
            grabMatchesInfo = userMatches.grabMatchesInfo;
          }
      });
    if (!user_id) {
      let currentUserString = localStorage.getItem('currentUser');
      let currentUser = JSON.parse(currentUserString);
        if (currentUser) {
          let id = currentUser.user_id;
          if (!id) {
            id = 1;
          }
          currentUser = id;
        } else {
            return (
              <div>
                <h1>Please login</h1>
              </div>
            );
        }
    }
    if (rankedMatches[user_id]) {
      const matchesArray = rankedMatches[currentUser].slice(0, 3);
      this.matchResults({
        rankedMatches: matchesArray,
        grabMatchesInfo
      })
    } 
  } 
  matchResults({rankedMatches, grabMatchesInfo }) {
    return rankedMatches.map(match => {
      const match_user_id = Object.keys(match);
      const matchPercent = match[match_user_id];
      const matchInfo = grabMatchesInfo[match_user_id];
      const name = matchInfo.full_name;
      const insta = matchInfo.insta_id;
      const image = matchInfo.img;
      this.setState({calculating:false})
      return (
        <div className="oneResult">
          <Result key={match_user_id} matchData={{ image, name, insta, matchPercent }}/>
        </div>
      );
    })
  } 
  render() {
    const results = (this.state.calculating) ? (<div>{ this.calculatingMatches() }</div>) : (<div> {this._handleMatchResults()}</div>)
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
export default Results;