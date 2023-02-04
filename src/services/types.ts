interface messageType {
  message: string;
  conversation: string;
  emote: string;
  avatar: string;
  avatarType: string;
  avatarTalk: string;
  avatarTalkType: string;
  avatarBackground: string;
}

export interface sendMessageType {
  (message: string): Promise<messageType>;
}
