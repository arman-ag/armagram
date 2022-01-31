import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../redux/actions';
import './headerStyle.scss';
const ProfileInfo = () => {
  const profile = useSelector((state: any) => state.singleProfile.profile);

  const image = () => {
    switch (profile?.name) {
      case 'Shakira':
        return (
          <img src={require('assets/images/shakira.jpg')} alt="profile " className="profile" />
        );

      case 'Joe Biden':
        return <img src={require('assets/images/biden.jpg')} alt="profile " className="profile" />;
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="header-profile" onClick={() => dispatch(modalAction.open('profileMenu'))}>
      {image()}
      <div className="info">
        <h3>{profile.name}</h3>
        <span>last seen recently</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
