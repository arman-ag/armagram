const initialState = {
  allMessages: [],
  mounted: false
};
const message = (state = initialState, action: any) => {
  switch (action.type) {
    case '+5432789512':
      return {
        ...state,
        allMessages: action.allMessages,
        mounted: action.mounted
      };

    case '+2132789512':
      return {
        ...state,
        message: action.data,
        mounted: action.mounted
      };
    default:
      return state;
  }
};
export default message;
