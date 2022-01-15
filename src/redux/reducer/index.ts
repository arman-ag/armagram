import { combineReducers } from "redux";
import message from "./message.reducer";
import profile from "./profile.reducer";

const allReducer = combineReducers({
  message,profile
});
export default allReducer;
