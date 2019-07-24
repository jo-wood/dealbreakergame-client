import React, { Component } from 'react';

class User extends Component {

  calcAge(dateString) {
    var birthday = new Date(dateString).getTime()
    var today = Date.now();
    var age = Math.floor((today - birthday) / (31557600000));
    return (
      <div>
        <h4>Age: { age }</h4>
      </div>
    );
  }
  
  checkIdentifyPreference(gender) {
    if (gender === 'preferNotToSay') {
      return false;
    } else {
      return true;
    }
  }
  
  render() {
    const { full_name, identifyAs, birthdate, image_url, username } = this.props.user;
    const age = (<div>{this.calcAge(birthdate)}</div>);
    const insta_link = `https://www.instagram.com/${username}/`;
    const displayGender = this.checkIdentifyPreference(identifyAs) && (<p>Gender: {identifyAs}</p>);
    return (
      <div>
        <h2>{full_name}</h2>
          <h3>Connect with {full_name} on Insta:</h3>

            <a href={insta_link}><button>{`@${username}`}</button></a>

        <div className="profile">          
          {age}
          {displayGender}
          <img src={image_url} alt="profile_image"/>
        </div>


      </div>   
    );
  }

}

export default User;