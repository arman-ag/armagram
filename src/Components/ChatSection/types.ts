import React from 'react';
interface profile {
  name: string;
  phone: string;
  bio: string;
  user: string;
  profileImage: string;
  id: number;
}
export interface messagesType {
  type: string;
  message: string;
  replyMessage?: string;
}
export interface messageText {
  text: string;
  time: Date;
}
export interface allMessageType {
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  profile: profile;
  send: (e: React.FormEvent) => void;
}
