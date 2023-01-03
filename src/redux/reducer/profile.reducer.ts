const initialState = {
  profile: []
};
const profile = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ALL_PROFILE':
      return {
        ...state,
        profile: action.profileData
      };

    default:
      return state;
  }
};
export default profile;
