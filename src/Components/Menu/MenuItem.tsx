import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction, singleProfileAction } from '../../redux/actions';
import './menuStyle.scss';
import { menuItem, menuItemProps } from './types';

const MenuItem = ({ profileData }: menuItemProps) => {
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.message.message);
  const state = useSelector((state: any) => state);

  const phone: string = profileData.phone;

  useEffect(() => {
    dispatch(messageAction.getMessage(phone, false));
  }, [dispatch, phone]);

  const receiveMessage = () => {
    dispatch(messageAction.getMessage(phone, true));
    dispatch(singleProfileAction.getSingleProfile(phone));
  };
  const image = (profileData: menuItem) => {
    switch (profileData?.name) {
      case 'Shakira':
        return (
          <img src={require('assets/images/shakira.jpg')} alt="profile " className="profile" />
        );

      case 'Joe Biden':
        return <img src={require('assets/images/biden.jpg')} alt="profile " className="profile" />;
    }
  };
  return (
    <div className="menu-item" onClick={receiveMessage}>
      {image(profileData)}
      <div className="profile-info">
        <h3>{profileData?.name}</h3>
        <div className="last-message">
          <span className="last-message-text">{messages[messages.length - 1]?.message} </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
