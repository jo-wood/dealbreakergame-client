import React, { Component } from 'react';
import ChatPrompt from './ChatPrompt';
import io from 'socket.io-client';
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
    await this.setState({ chatlog: [ "when does the game start?","Has anyone ever played?", "hello", "whats popping", "what is this ?"]})
    this.socket = io('http://localhost:5001');

    // Wait for new messages
    const socket = this.socket;
    socket.on('message', (messageData) => {
      this._handleOnNewMessage(messageData);
    });
  }

  _handleOnNewMessage = (messageData) => {
    console.log(messageData.chatMessage);
    const oldMessageLog = this.state.chatlog;
    oldMessageLog.shift();
    const newMessageLog = [...oldMessageLog, messageData.chatMessage];
    this.setState({ chatlog: newMessageLog });
  }

  _handleOnSubmit = (event) => {
    event.preventDefault();
    let messageInput = event.target.children[0];
    const socket = this.socket;

    socket.emit('message', { chatMessage: messageInput.value });
    messageInput.value = "";
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
        <form onSubmit={this._handleOnSubmit}>
          <input type="text" name="chatInput" placeholder="Ready to play?"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatRoom;