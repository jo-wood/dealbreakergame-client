import React, { Component } from 'react';

class SingleContestent extends Component {

  renderPic({ key, img, match } ) {
    switch (true) {
      case (match < 33):
        return (
            <div className="crop fullblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 50):
        return (
            <div className="crop thirdblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 75):
        return (
            <div className="crop halfblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      default:
        return (
            <div className="crop noblur">
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