import React, { Component } from 'react';
import HostPoster from '../../images/host.jpeg';

class Host extends Component {
  render() {
    return (
      <div className="gifs">
        <iframe 
          title="questionGifs"
          src={this.props.gif}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen>
        </iframe>       
          {/* <img src={HostPoster} height="450px" alt="placeholder for host video"/> */}
      </div>
    );
  }
}

export default Host;