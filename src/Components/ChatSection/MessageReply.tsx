import React from 'react';
import './chatSection.scss';
import { messageReplyProps } from './types';

const MessageReply = ({ text }: messageReplyProps) => {
  return (
    <div className="message message-send  ">
      <div className="message-reply">
        <span className="message-reply-horizontal" />
        <div className="message-reply-box">
          <span className="message-reply-box-phone">+58235358</span>
          <span>{text.replyMessage}</span>
        </div>
      </div>
      {text.message}
      <div className="angle" />
    </div>
  );
};

export default MessageReply;
