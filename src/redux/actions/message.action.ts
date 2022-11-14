import { store } from 'redux/store';
import { sendService } from 'services';
import { dataMessage } from './../../assets';
import { message } from './types';

const state = store.getState();

const getMessage = (phoneNum: string, mounted: boolean) => {
  const { [phoneNum]: data }: message = dataMessage;
  return { type: phoneNum, data, mounted };
};

const send = (userMessage: string, mounted: boolean) => {
  const {
    message: { allMessages }
  } = state;

  allMessages.push({ userMessage });
  return async (dispatch) => {
    const {
      data: { message }
    } = await sendService.getMessage(userMessage);
    allMessages.push({ receiveMessage: message });
    console.log({ allMessages });
    dispatch({
      type: '+5432789512',
      allMessages,
      mounted
    });
  };
};

export const messageAction = {
  getMessage,
  send
};
