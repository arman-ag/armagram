const initialState = {
  mounted: false
};
const message = (state = initialState, action: any) => {
  console.log('action', action);
  switch (action.type) {
    case '+5432789512': {
      const messageList = [...(state['+5432789512'] ?? []), action?.message].filter(
        (item) => item !== undefined
      );
      const messages = {
        '+5432789512': messageList,
        mounted: action.mounted
      };
      return messages;
    }
    case '+2132789512':
      return {
        '+2132789512': action.allMessage ?? [],
        mounted: action.mounted
      };
    default:
      return state;
  }
};
export default message;
