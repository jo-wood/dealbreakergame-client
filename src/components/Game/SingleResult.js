import React, { Component } from 'react';

class Host extends Component {
  render() {
    return (
      <div>
          <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt="profile_picture"/>
          <div className="resultsInformation">
              <h3>Monica_1243</h3>
              <p>75% Match</p>
              <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">Follow</a>
          </div>
      </div>
    );
  }
}

export default Host;