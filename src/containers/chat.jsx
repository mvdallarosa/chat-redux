import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './message_list.jsx'
import MessageForm from './message_form.jsx'

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <h2>Channel #general</h2>
        <MessageList/>
        <MessageForm/>
      </div>
    );
  }
};

export default Chat
