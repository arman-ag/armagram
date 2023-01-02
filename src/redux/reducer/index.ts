import { combineReducers } from 'redux';
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
  selectedProfile
});
export default allReducer;
