const sendMessage = (phoneNum: string, message: any) => {
  console.log({ type: phoneNum, message });
  return { phoneNum, message };
};

export const sendMessageAction = {
  sendMessage
};
