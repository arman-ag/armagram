import { sendService } from 'services';

const userMessage = (userMessage, phone) => {
  return async (dispatch) => {
    dispatch(sendMessage(userMessage, phone, false));
    try {
      const {
        data: { message }
      } = await sendService.getMessage(userMessage);
      dispatch(sendMessage(message, phone, true));
    } catch (err) {
      console.log(err);
      dispatch(sendMessageFail(err.message + 'please use proxy to use app'));
    }
  };
};
const sendMessage = (userMessage, phone, Permission) => {
  return {
    type: 'user_message',
    phone,
    userMessage,
    Permission
  };
};
const sendMessageFail = (err) => {
  return { type: 'send_message_fail', openModal: true, err };
};
export const messageAction = {
  userMessage
};
