const initialState = { sendPermission: true };

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'user_message':
      return {
        ...state,
        [action.phone]: {
          message: [...(state[action.phone]?.message || []), action?.userMessage]
        },
        sendPermission: action.Permission
      };
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
