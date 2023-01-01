import axios from 'axios';
const baseURL = 'https://www.botlibre.com/rest/json';
const getMessage = (message) => {
  const sendData = {
    application: '8254865227346536346',
    instance: '165',
    message
  };
  return axios.post(`${baseURL}/chat`, sendData);
};
export const sendService = {
  getMessage
};
