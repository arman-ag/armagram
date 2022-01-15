import { combineReducers } from "redux";
import message from "./message.reducer";
import modal from "./modal.reducer";
import profile from "./profile.reducer";

const allReducer = combineReducers({
  message,profile,modal
});
export default allReducer;
