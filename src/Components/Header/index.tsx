import React from 'react';
import { useSelector } from 'react-redux';
import './headerStyle.scss';
import ProfileInfo from './ProfileInfo';
const Header = () => {
  const mounted = useSelector((state: any) => state.message.mounted);

  return (
    <div style={mounted ? { display: 'block' } : { display: 'none' }} className="header">
      <ProfileInfo />
    </div>
  );
};

export default Header;
