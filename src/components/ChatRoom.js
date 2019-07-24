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
    //const json = await response.json();
    await this.setState({ chatlog: [ "hello", "whats popping", "what is this ?"]})
  }

  renderChat(chatlog) {
    return chatlog.map(prompt => {
      return (
        <div>
          <ChatPrompt key={prompt.id} prompt={prompt} />
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
        <input type="text" name="chatInput" placeholder="Ready to play?"></input>
      </div>
    );
  }
}

export default ChatRoom;