import { combineReducers } from "redux";
import message from "./message.reducer";

const allReducer = combineReducers({
  message,
});
export default allReducer;
