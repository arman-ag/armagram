
const initialState = {
  message:[]
};
const message = (state = initialState, action:any) => {
  switch (action.type) {
    case "+5432789512":
      return {
        ...state,
        message:action.data
      };
      case"+2132789512":
      return{
        ...state,
        message:action.data
      }
    default:
      return state;
  }
};
export default message;
