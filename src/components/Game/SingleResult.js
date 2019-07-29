import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { name, image, insta, matchPercent } = this.props.matchData;
    return (
      <div>
          <div className="results-cropper">
              <img className="results-profile" src={image} alt="profile_picture"/>
          </div>
            <div className="match-details">
              <h3>{name}</h3>
              <p>{matchPercent}% Match</p>
              <a href={insta} target='_blank' rel="noopener noreferrer">Follow</a>
            </div> 
      </div>
    );
  }
}
export default Result;