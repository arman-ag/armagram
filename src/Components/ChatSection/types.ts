import React from 'react';

export interface messagesType {
  type: string;
  message: string;
  replyMessage?: string;
}
export interface messageText {
  text: string;
}
export interface allMessageType {
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  send: (e: React.FormEvent) => void;
}

export interface messageReplyProps {
  text: { type: string; message: string; replyMessage?: string };
}
