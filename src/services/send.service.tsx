import axios from 'axios';
const baseURL = 'https://www.botlibre.com/rest/json';
const getMessage = (message) => {
  const sendData = {
    application: '5378011087708094707',
    instance: '165',
    message
  };
  return axios.post(`${baseURL}/chat`, sendData);
};
export const sendService = {
  getMessage
};
