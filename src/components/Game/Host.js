import React, { Component } from 'react';
import HostPoster from '../../images/host.jpeg';

class Host extends Component {
  render() {
    return (
      <div className="gifs">
      <iframe
        title="questionGifs"
        src={this.props.gif} 
        width="100%" height="50%"
        fameBorder="0" class="giphy-embed" 
        allowFullScreen></iframe>   
      </div>
    );
  }
}

export default Host;