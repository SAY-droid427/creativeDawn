import React from 'react';
import ReactDOM from 'react-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components/index';

const apiKey=`${process.env.REACT_APP_API_KEY}`;
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div>
      <Chat client={client} theme="message light">
        <ChannelListContainer />
      </Chat>
    </div>
  )
}

export default App;
