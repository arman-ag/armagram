const initialState = [];
const selectedProfile = (state = initialState, action: any) => {
  switch (action.type) {
    case 'addContact': {
      return [...state, action.profileData];
    }
    case 'deleteContact':
      return;
    default:
      return state;
  }
};
export default selectedProfile;
