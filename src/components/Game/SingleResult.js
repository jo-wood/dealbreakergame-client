import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div>
          <div className="results-cropper">
              <img className="results-profile" src="https://images.unsplash.com/photo-1498529381350-89c2e7ccc430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile_picture"/>
          </div>
            <div className="match-details">
              <h3>Monica_1243</h3>
              <p>90% Match</p>
              <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">Follow</a>
            </div> 
          <div className="results-cropper">
              <img className="results-profile" src="https://images.unsplash.com/photo-1550926781-93aef598b010?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile_picture"/>
          </div>            
            <div className="match-details">
              <h3>Sammy</h3>
              <p>88% Match</p>
              <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">Follow</a>
            </div>        
          <div className="results-cropper">
              <img className="results-profile" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="profile_picture"/>
          </div>
            <div className="match-details">          
              <h3>Leona_Jays</h3>
              <p>75% Match</p>
              <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer">Follow</a>
          </div>
      </div>
    );
  }
}

export default Result;