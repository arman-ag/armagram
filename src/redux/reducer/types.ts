export interface message {
  type: string;
  message: string;
  replyMessage?: string;
}
export interface profileDataTypes {
  singleProfile: { name: string; phone: string; bio: string; user: string; profileImage: string };
}
