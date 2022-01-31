const initialState = {
  profile: {}
};
const singleProfile = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SINGLE_PROFILE':
      return {
        ...state,
        profile: action.data
      };
    default:
      return state;
  }
};
export default singleProfile;
