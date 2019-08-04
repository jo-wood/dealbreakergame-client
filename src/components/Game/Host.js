import React, { Component } from 'react';

class Host extends Component {
  render() {
    return (
      <div className="gifs">
      <iframe
        title="questionGifs"
        src={this.props.gif} 
        width="100%" height="50%"
        frameBorder="0" className="giphy-embed"
        allowFullScreen></iframe>
      </div>
    );
  }
}
export default Host;