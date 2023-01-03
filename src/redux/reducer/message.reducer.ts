const initialState = [];
// const message = (state = initialState, action: any) => {
//   switch (action.type) {
//     case '+5432789512': {
//       const messageList = [...(state['+5432789512'] ?? []), action?.message].filter(
//         (item) => item !== undefined
//       );
//       const messages = {
//         '+5432789512': messageList,
//         mounted: action.mounted
//       };
//       return messages;
//     }
//     case '+2132789512':
//       return {
//         '+2132789512': action.allMessage ?? [],
//         mounted: action.mounted
//       };
//     default:
//       return state;
//   }
// };
const message = (state = initialState, action) => {
  switch (action.type) {
    case 'user-message':
      return [...state, action.user];
    case 'delete-message':
      return;
    default:
      return state;
  }
};
export default message;
