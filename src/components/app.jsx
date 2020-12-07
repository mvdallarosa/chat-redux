import React from 'react';
import Chat from '../containers/chat.jsx'
import SideBar from './side_bar.jsx'
import ChannelList from './channel_list.jsx'

const App = () => {
  return (
    <div className="app">
      <SideBar/>
      <ChannelList/>
      <Chat/>
    </div>
  );
};

export default App;
