const open = (text: string) => {
  return { type: 'OPEN_REPLAY', openReply: 'flex', text };
};
const close = () => {
  return { type: 'CLOSE_REPLAY', openReply: 'none' };
};
export const replyAction = {
  close,
  open
};
