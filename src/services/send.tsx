import axios from 'axios';
import { sendMessageType } from './types';
const baseURL = 'https://www.botlibre.com/rest/json';
export const sendMessage = new Promise<sendMessageType>((message) => {
  const sendData = {
    application: '6415656259236619886',
    instance: '165',
    message
  };
  return axios.post(`${baseURL}/chat`, sendData);
});
