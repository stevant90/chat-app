import React from 'react';
import { TOKEN } from '../../Redux/constants/apiInfo';

const Message = ({ chatMessage }) => {
  const { author, message, token } = chatMessage;

  return (
    <div className="Message">
      <div className="Message__content">
        <p className="Message__author">{TOKEN === token ? 'Me' : author}</p>
        <p className="Message__text">{message}</p>
        <p className="Message__time">Message time</p>
      </div>
    </div>
  );
}

export default Message;