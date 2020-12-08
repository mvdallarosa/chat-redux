import React, { Component } from 'react';
import { connect } from 'react-redux';

function strToRGB(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return `#${"00000".substring(0, 6 - c.length)}${c}`;
}

class Message extends Component {
  render() {
  const time = new Date(this.props.message.created_at).toLocaleTimeString();
    return (
      <div className="message">
        <div className="sender">
          <h4 style={{ color: strToRGB(this.props.message.author) }}>{this.props.message.author} </h4>
          <p> - {time}</p>
        </div>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
};

export default Message
