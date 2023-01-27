import { sendService } from 'services';

const userMessage = (userMessage, phone, id) => {
  return async (dispatch) => {
    dispatch(sendMessage(userMessage, phone, false));
    try {
      const {
        data: { message }
      } = await sendService.getMessage(userMessage, id);
      dispatch(sendMessage(message, phone, true));
    } catch (err) {
      dispatch(sendMessageFail(err.message + ' please use vpn'));
    }
  };
};
const sendMessage = (message, phone, Permission) => {
  const time = new Date();
  return {
    type: 'user_message',
    phone,
    userMessage: { message, time },
    Permission
  };
};
const sendMessageFail = (err) => {
  return { type: 'send_message_fail', openModal: true, err };
};
export const messageAction = {
  userMessage
};
