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
      if (err?.response?.status === 400) {
        dispatch(sendMessage('Hey you must be polite with me 😑', phone, true));
      } else {
        dispatch(sendMessageFail(err.message + ' ⛔ use vpn', 'networkError'));
      }
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
const sendMessageFail = (err, errStatus) => {
  return { type: 'send_message_fail', openModal: true, err, errStatus };
};
export const messageAction = {
  userMessage
};
