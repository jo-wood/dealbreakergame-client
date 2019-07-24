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
  
  renderMyProfile(min, max) {
    return (
      <div className="my_profile">
        <h3>Age Perference:</h3>
          <input name="age_range" type="range" min={min} max={max} value="50"/>
      </div>
    );
  }

  renderMatchProfile(name, handle) {
    const insta_link = `https://www.instagram.com/${handle}/`;
    return(
      <div className="matchProfile">          
        <h3>Connect with {name} on Insta:</h3>
          <a href={insta_link}><button>{`@${handle}`}</button></a>
      </div>    
    );  
  }


  
  render() {
    const age_range_max = this.props.profile.age_perference_max;
    const age_range_min = this.props.profile.age_perference_min;
    const { viewAs } = this.props;
    const { full_name, identifyAs, birthdate, image_url, username } = this.props.profile;
    const age = (<div>{this.calcAge(birthdate)}</div>);
    const displayGender = this.checkIdentifyPreference(identifyAs) && (<p>Gender: {identifyAs}</p>);
    const viewer = (viewAs === 'myProfile') ? this.renderMyProfile(age_range_min, age_range_max) : this.renderMatchProfile(full_name, username);
    return (
      <div className="profile">
          <img src={image_url} alt="profile_image"/>       
          <div className="user_details">  
            <h2>{full_name}</h2>
            {age}
            {displayGender}
            {viewer}
          </div>
      </div>  
    );
  }

}

export default User;