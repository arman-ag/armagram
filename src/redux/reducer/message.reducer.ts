
const initialState = {
  message:[],
  mounted:false
};
const message = (state = initialState, action:any) => {
  switch (action.type) {
    case "+5432789512":
      console.log("a")
      return {
        ...state,
        message:action.data,
        mounted:action.mounted
      };
      case"+2132789512":
      console.log("b")

      return{
        ...state,
        message:action.data,
        mounted:action.mounted
      }
    default:
      return state;
  }
};
export default message;
