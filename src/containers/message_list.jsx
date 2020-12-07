import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message.jsx'
import { bindActionCreators } from 'redux';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general')
  }
  render() {
    return (
      <div className="message-list">
        {this.props.messages === null ? "" : this.props.messages.map(message => <Message message={message} />) }
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchMessages('general')
  }
};

import { fetchMessages } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: 'general'
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
