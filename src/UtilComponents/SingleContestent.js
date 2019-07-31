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
      case (match < 40):
        return (
            <div className="crop thirtyblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 50):
        return (
            <div className="crop fortyblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 60):
          return (
              <div className="crop fiftyblur">
                <img src={img} key={key} alt="user_img" />
              </div>
          )
      case (match < 70):
        return (
            <div className="crop sixtyblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 75):
        return (
            <div className="crop sevenityblur">
              <img src={img} key={key} alt="user_img" />
            </div>
        )
      case (match < 80):
        return (
            <div className="crop eightyblur">
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