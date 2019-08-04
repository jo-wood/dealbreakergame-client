import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { name, image, matchPercent, username } = this.props.matchData;
    return (
      <div>
          <div className="results-cropper">
              <img className="results-profile" src={image} alt="profile_picture"/>
          </div>
            <div className="match-details">
              <h3>{name}</h3>
              <p><span>{matchPercent}%</span> Match</p>
              <div className="follow-box">        
                <a href={`http://www.instagram.com/${username}`} target='_blank' rel="noopener noreferrer">Follow</a> 
            </div>
          </div> 
      </div>
    );
  }
}
export default Result;