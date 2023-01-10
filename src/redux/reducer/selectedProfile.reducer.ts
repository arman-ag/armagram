const JsonStoredSelectedProfile = localStorage.getItem('user_selected_profile');
const storedSelectedProfile = JSON.parse(JsonStoredSelectedProfile) || [];

const saveLocalStorage = (item) => {
  localStorage.setItem('user_selected_profile', JSON.stringify(item));
  return item;
};
const selectedProfile = (state = storedSelectedProfile, action: any) => {
  switch (action.type) {
    case 'addContact': {
      return saveLocalStorage([...state, action.profileData]);
    }
    case 'deleteContact':
      return;
    default:
      return state;
  }
};
export default selectedProfile;
