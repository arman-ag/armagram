import { sendService } from 'services';

const userMessage = (userMessage, phone) => {
  return async (dispatch) => {
    dispatch(sendMessage(userMessage, phone));
    const {
      data: { message }
    } = await sendService.getMessage(userMessage);

    dispatch(sendMessage(message, phone));
  };
};
const sendMessage = (userMessage, phone) => {
  return {
    type: 'user_message',
    phone,
    userMessage
  };
};

export const messageAction = {
  userMessage
};
