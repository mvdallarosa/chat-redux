import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message.jsx'
import { bindActionCreators } from 'redux';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }
 componentDidMount() {
    this.refresher = setInterval(this.props.fetchMessages(this.props.selectedChannel), 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render() {
    return (
      <div className="message-list" ref={(list) => { this.list = list; }}>
        {this.props.messages === null ? "" : this.props.messages.map(message => <Message message={message} />) }
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchMessages(this.props.selectedChannel)
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
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
