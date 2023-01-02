const initialState = {
  status: { open: true, element: 'contact' }
};
const isOpen = (state = initialState, action: any) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        status: action.status
      };
    case 'CLOSE':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};
export default isOpen;
