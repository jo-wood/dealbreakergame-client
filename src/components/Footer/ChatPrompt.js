import React, { Component } from 'react';

class ChatPrompt extends Component {
  render() {
    const { prompt } = this.props;
    return (
      <div className="chatPrompt">
          <p>{prompt}</p>
      </div>
    );
  }

}

export default ChatPrompt;