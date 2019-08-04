import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  renderFooter() {
    const currentUrl = window.location.href;
    const waitingPath = currentUrl.includes('waiting');
    const gamePath = currentUrl.includes('game');
    const profilePath = currentUrl.includes('profile')
    switch (true) {
      case waitingPath:
      case profilePath:        
        return (
          <footer>
            <div className="plainFooter"></div> 
          </footer>
        )    
      case gamePath:
        return (
          <footer>
              <div className="gameFooterHide"></div>
          </footer>
        )         
      default:
          return (
            <footer>
              <Link to="/privacy">
                <div className="madeWithLove">
                  {`Made with \u{2665} in Toronto `}
                </div>
                <div className="privacyLink">       
                  Privacy Policy
                </div>
              </Link>     
            </footer>
          )        
    }
  }
  render() {
    return (<div>{ this.renderFooter() }</div> );
  }
}
export default Footer;