import React, { Component } from 'react';
import ChatPrompt from './ChatPrompt'
require('dotenv').config({ path: '../../' })

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chatlog: null,
    }
  }
  
  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/chat`)
    const json = await response.json();
    await this.setState({ chatlog: json })
  }

  renderChat(chatlog) {
    return chatlog.map(prompt => {
      return (
        <div>
          <ChatPrompt key={prompt.id} prompt={prompt} />
          <input type="text" name="chatInput" value="Ready to play?"></input>
        </div>
      )
    });
  }

  render() {
    const { chatlog } = this.state;
    const chat = chatlog ? (this.renderChat(chatlog)) : (<h3>Loading Chat ...</h3>)
    return (
      <div>
        { chat }
      </div>
    );
  }
}

export default ChatRoom;