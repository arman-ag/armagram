const initialState = {
  profile: {}
};
const singleProfile = (state = initialState, action: any) => {
  switch (action.type) {
    case 'selected_profile':
      return {
        ...state,
        profile: action?.singleProfile
      };
    default:
      return state;
  }
};
export default singleProfile;
