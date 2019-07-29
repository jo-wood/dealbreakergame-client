import React, { Component } from 'react';

class SingleContestent extends Component {

  renderPic({ key, img, match } ) {
    switch (match) {
      case 100: 
        return (
            <div className="profile-userpool">
              <img src={img} key={key} alt="user_img" />
            </div> 
        )     
      case 50:
        return (
            <div className="profile-userpool halfblur">
              <img src={img} key={key} alt="user_img" />
            </div> 
        )  
      case 33:
        return (
            <div className="profile-userpool thirdblur">
              <img src={img} key={key} alt="user_img" />
            </div> 
        )          
      default:
        return (
            <div className="profile-userpool fullblur">
              <img src={img} key={key} alt="user_img" />
            </div> 
        )          
    }
  }

  render() {
    const renderMatchPercentBlur = this.renderPic(this.props)
    return (
      <div>
        { renderMatchPercentBlur }
      </div>      
    );
  }

}

export default SingleContestent;