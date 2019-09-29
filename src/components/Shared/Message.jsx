import React from 'react';
import { TOKEN } from '../../Redux/constants/apiInfo';

const Message = ({ chatMessage }) => {
  const { author, message, token } = chatMessage;
  const isMe = TOKEN === token ? true : false;

  return (
    <div className={`Message ${isMe ? 'yellow-bgk' : ''}`}>
      <div className="Message__content">
        <p className="Message__author">{isMe ? 'You' : author}</p>
        <p className="Message__text">{message}</p>
        <p className="Message__time">Message time</p>
      </div>
    </div>
  );
}

export default Message;