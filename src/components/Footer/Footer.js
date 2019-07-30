import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    <div>
      <footer>
        <Link to="/privacy" >
          <div className="privacyLink">
        <div className="madeWithLove">
          {
            `Made with \u{2665} in Toronto `
          } 
        </div>            
            Privacy Policy
          </div>
        </Link>     
      </footer>
    </div>
    );
  }

}

export default Footer;
