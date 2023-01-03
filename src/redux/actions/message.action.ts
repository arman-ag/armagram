import { sendService } from 'services';

const openPanel = (phoneNum: string, mounted: boolean) => {
  return { type: 'user-message', user: { phoneNum, mounted } };
};
const uMessage = (userMessage, phone: string, mounted: boolean) => {
  return (dispatch) => {
    dispatch({
      type: phone,
      message: userMessage,
      mounted
    });
  };
};
const send = (userMessage: string, phone: string, mounted: boolean) => {
  return async (dispatch) => {
    const {
      data: { message }
    } = await sendService.getMessage(userMessage);

    dispatch({
      type: phone,
      message,
      mounted
    });
  };
};

export const messageAction = {
  uMessage,
  openPanel,
  send
};
