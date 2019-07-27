import React, { Component } from 'react';
import User from './User'
import {Helmet} from "react-helmet";
require('dotenv').config({ path: '../../' })

class Profile extends Component {
  constructor() {
    super();
    this.state = { 
      user_data: null,
      user_matches: [1, 2] 
    }
  }
  
  async componentDidMount() {
    // change to include user_id in headers or body of req, and have server side send back only one user instead of all
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/profile`)
    const json = await response.json();
    // current response from server is all users, therefore store as if only 1
    console.log(json)
    await this.setState({user_data : json })
  }

  renderProfile(user, user_matches) {
    // add check for current cookie session with returned user object
    // remove users.map when passing only one user response to renderProfile
      const dummy_cookie = 1;
      if (user.id === dummy_cookie) {
          return (
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>My Profile</title>
                <meta name="description" content="Dealbreaker profile page, see your information and past matches" />
              </Helmet>
              <User key={user.id} profile={user} viewAs={'myProfile'} />
            </div>
          )  
      } else if ( user_matches.indexOf( dummy_cookie ) !== -1 ) { 
          return (
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Match Profile</title>
                <meta name="description" content="Dealbreaker Match Profile, see details about your match" />
              </Helmet>
              <User key={user.id} profile={user} viewAs={'aMatch'} />
            </div>
          )  
        } else {
          return ( 
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Unauthorized</title>
                <meta name="description" content="Unauthorized profile, user is not allowed to use this profile" />
              </Helmet>
              <h3>Not authorized to view this profile... </h3>
            </div>
          )
        }

      }
  
  
  render() {
    const { user_data, user_matches } = this.state;
    const profile = user_data && (<div>{this.renderProfile(user_data[7], user_matches )}</div>);
    return (
      <div>
        { profile }
      </div>
    );
  }

}

export default Profile;