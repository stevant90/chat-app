import React from 'react';

import Message from './Shared/Message';

const ChatRoom = ({ messages }) => {

  const renderChatMessage = () => {
    if (messages && messages.length) {
      return messages.map(message => <Message key={message._id} chatMessage={message}/>);
    }
  } 
  return (
    <div className="ChatRoom">
      <div className="ChatRoom__bkg-mask"></div>
      {renderChatMessage()}
    </div>
  );
}

export default ChatRoom;