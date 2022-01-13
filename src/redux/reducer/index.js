import { combineReducers } from "redux";
import location from "./locations.reducer";

const allReducer = combineReducers({
  location,
});
export default allReducer;
