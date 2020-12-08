import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './message_list.jsx'
import MessageForm from './message_form.jsx'

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <h2>Channel #{this.props.selectedChannel}</h2>
        <MessageList/>
        <MessageForm/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(Chat);
