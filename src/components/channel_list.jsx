import React, { Component } from 'react';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        <h3>Channels</h3>
        <br/>
        <h4 className="active">#general</h4>
        <h4>#react</h4>
        <h4>#paris</h4>
      </div>
    );
  }
};

export default ChannelList
