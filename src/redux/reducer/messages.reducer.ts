import { dataMessage } from "./../../assets/";

const initialState = {
  dataMessage
 
};


const allMessages = (state = initialState, action:any) => {
    const phone:string=action.type
  switch (action.type) {
    case "+5432789512":
//  dataMessage[phone]=action.message
      return {
        ...state,
       dataMessage
      };
      case"+2132789512":
//  dataMessage[phone]=action.message
      return{
        ...state,
        dataMessage
      }
    default:
      return {...state};
  }
};
export default allMessages;
