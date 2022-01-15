import { combineReducers } from "redux";
import message from "./message.reducer";
import modal from "./modal.reducer";
import profile from "./profile.reducer";
import singleProfile from "./singleProfile.reducer";

const allReducer = combineReducers({
  message,profile,modal,singleProfile
});
export default allReducer;
