import { profileData } from '../../assets';

const getSingleProfile = (phoneNum: string) => {
  const singleProfile = profileData.find((item) => item.phone === phoneNum);
  return { type: 'SINGLE_PROFILE', data: singleProfile };
};
export const singleProfileAction = {
  getSingleProfile
};
