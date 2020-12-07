import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {

  render() {
    return (
      <div className="message">
        <div className="sender">
          <h4>{this.props.message.author} </h4>
          <p> - {this.props.message.created_at}</p>
        </div>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
};

export default Message
