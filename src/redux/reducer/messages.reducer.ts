import { dataMessage } from './../../assets/';

const initialState = {
  dataMessage
};

const allMessages = (state = initialState, action: any) => {
  const phone: string = action?.type;
  //  dataMessage[phone]=action.message
  return {
    ...state,
    dataMessage
  };
};
export default allMessages;
