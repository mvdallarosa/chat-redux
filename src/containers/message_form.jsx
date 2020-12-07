import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {content: ""}
  }
  handleChange = (event) => {
    this.setState({content: event.target.value});
  }

  handleSubmit = (event) => {
    this.props.createMessage("general", 'meri', this.state.content)
  }
  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Write something..." onChange={this.handleChange}/>
        <input type="submit" value="Send" className="send-btn"/>
      </form>
    );
  }
};

import { createMessage } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch );
}

export default connect(mapDispatchToProps)(MessageForm);
