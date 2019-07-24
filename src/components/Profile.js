import React, { Component } from 'react';
import User from './User'
require('dotenv').config({ path: '../../' })

class Profile extends Component {
  constructor() {
    super();
    this.state = { user_data: null }
  }
  
  async componentDidMount() {
    // change to include user_id in headers or body of req, and have server side send back only one user instead of all
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/profile`)
    const json = await response.json();
    // current response from server is all users, therefore store as if only 1
    await this.setState({user_data : json })
  }

  renderProfile(user) {
    // add check for current cookie session with returned user object
    // remove users.map when passing only one user response to renderProfile
      const dummy_cookie = 3;
      if (user.id === dummy_cookie) {
          return (
            <div>
              <User key={user.id} user={user} />
            </div>
          )  
      } else {
        return ( 
          <h3> 
            <p>Not authorized to view this profile... </p>
          </h3>
        )
      }
    }
  
  render() {
    const { user_data } = this.state;
    const profile = user_data && (<div>{this.renderProfile(user_data[2])}</div>);
    return (
      <div>
        { profile }
      </div>
    );
  }

}

export default Profile;