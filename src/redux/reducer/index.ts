import { combineReducers } from 'redux';
import menuPosition from './menuPosition.reducer';
import message from './message.reducer';
import modal from './modal.reducer';
import profile from './profile.reducer';
import replyStatus from './replyStatus.reducer';
import selectedProfile from './selectedProfile.reducer';
import singleProfile from './singleProfile.reducer';
const allReducer = combineReducers({
  message,
  profile,
  modal,
  singleProfile,
  replyStatus,
  selectedProfile,
  menuPosition
});
export default allReducer;
