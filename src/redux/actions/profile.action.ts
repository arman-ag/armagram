import { profileData } from './../../assets';

const getAllProfile = () => {
  return { type: 'ALL_PROFILE', profileData };
};

export const profileAction = {
  getAllProfile
};
