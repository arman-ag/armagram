import { profileData } from './../../assets';

const getAllProfile = () => {
  return { type: 'ALL_PROFILE', data: profileData };
};

export const profileAction = {
  getAllProfile
};
