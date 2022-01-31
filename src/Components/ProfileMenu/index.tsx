import React from 'react';
import { useSelector } from 'react-redux';
import ProfileContact from './ProfileContact';
import ProfileHeader from './ProfileHeader';
import './profileMenuStyle.scss';
import { profileTypes } from './profileMenuTypes';
const ProfileMenu = () => {
  const profile: profileTypes = useSelector((state: any) => state.singleProfile.profile);

  const image = () => {
    switch (profile?.name) {
      case 'Shakira':
        return <img src={require('assets/images/shakira.jpg')} alt="profile " />;

      case 'Joe Biden':
        return <img src={require('assets/images/biden.jpg')} alt="profile " />;

      default:
        break;
    }
  };
  return (
    <div className="ProfileMenu">
      <ProfileHeader />
      <div className="profileImage">
        {/* <img src={require(profile?.profileImage)}  alt="profile header" /> */}
        {image()}
        <div className="profileImage-caption">
          <span className="profileImage-caption-name">{profile.name}</span>
          <span>last seen recently</span>
        </div>
      </div>
      <ProfileContact profile={profile} />
    </div>
  );
};

export default ProfileMenu;
