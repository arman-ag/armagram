const initialState = {};

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'user_message':
      console.log(action);
      return {
        ...state,
        [action.phone]: {
          message: [...(state[action.phone]?.message || []), action?.userMessage]
        }
      };
    case 'delete_message':
      return;
    default:
      return state;
  }
};
export default message;
