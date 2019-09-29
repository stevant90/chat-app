import React from 'react';

const Message = () => {
  return (
    <div className="Message">
      <div className="Message__content">
        <p className="Message__author">Message author</p>
        <p className="Message__text">Message text</p>
        <p className="Message__time">Message time</p>
      </div>
    </div>
  );
}

export default Message;