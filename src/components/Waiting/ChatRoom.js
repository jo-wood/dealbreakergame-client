import React, { Component } from 'react';
import ChatPrompt from '../Footer/ChatPrompt';
import io from 'socket.io-client';
import Logo from '../../images/favicon.png'
require('dotenv').config({ path: '../../' })

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chatlog: null,
    }
  }
  
  async componentDidMount() {
    await this.setState({ chatlog: [ "when does the game start?","Has anyone ever played?", "hello", "I can't wait to find love", "what is this ?"]})
    this.socket = io('http://localhost:5001');
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
      <div className="chatroom">
        <img src={Logo} alt='logo' />
        <div className="chat">
        { chat }
        </div>
          <form onSubmit={this._handleOnSubmit}>
            <input type="text" name="chatInput" placeholder="  Ready to play?! "></input>
            <button type="submit"><i class="fa fa-comment"></i></button>
          </form>
      </div>
    );
  }
}

export default ChatRoom;