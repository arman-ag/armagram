import { sendService } from 'services';

const openPanel = (phoneNum: string, mounted: boolean) => {
  // const { [phoneNum]: data }: message = dataMessage;
  return { type: phoneNum, mounted };
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
