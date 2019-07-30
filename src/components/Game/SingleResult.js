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
              <p><span>{matchPercent}%</span> Match</p>
              <div className="follow-box">        
                <a href={insta} target='_blank' rel="noopener noreferrer">Follow:</a> 
                  <div className="instagram">  
                    <span className="fa fa-instagram follow"></span>       
                  </div>
              </div>

            </div> 
      </div>
    );
  }
}
export default Result;