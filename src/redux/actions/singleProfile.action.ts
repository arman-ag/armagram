import { profileData } from '../../assets';

const getSingleProfile = (phoneNum: string) => {
  const singleProfile = profileData.find((item) => item.phone === phoneNum);
  return { type: 'selected_profile', singleProfile };
};
export const singleProfileAction = {
  getSingleProfile
};
