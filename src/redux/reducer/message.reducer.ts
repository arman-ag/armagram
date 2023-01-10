const JsonStoredData = localStorage.getItem('user_data_message');
const storedData = JSON.parse(JsonStoredData) || { sendPermission: true };

const saveLocalStorage = (receiveOrNot, item) => {
  if (receiveOrNot) {
    localStorage.setItem('user_data_message', JSON.stringify(item));
  }
  return item;
};

const message = (state = storedData, action) => {
  switch (action.type) {
    case 'user_message':
      // eslint-disable-next-line no-case-declarations
      const receiveOrNot = state[action.phone]?.message.length % 2 == 1;
      return saveLocalStorage(receiveOrNot, {
        ...state,
        [action.phone]: {
          message: [...(state[action.phone]?.message || []), action?.userMessage]
        },
        sendPermission: action.Permission
      });
    case 'send_message_fail':
      return {
        openModal: action?.openModal,
        message: action?.err
      };
    case 'delete_message':
      return;
    default:
      return state;
  }
};
export default message;
