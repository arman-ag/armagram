export interface messagesType {
  type: string;
  message: string;
  replyMessage?: string;
}
export interface messageText {
  text: string;
}
export interface allMessageType {
  allMessages: { type: string; message: string; replyMessage?: string }[];
}
export interface replyType {
  text: {
    replyMessage: string;
    message: string;
  };
}
