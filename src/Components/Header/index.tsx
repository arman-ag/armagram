import { useSelector } from 'react-redux';
import './headerStyle.scss';
import ProfileInfo from './ProfileInfo';
const Header = () => {
  const mountedProfile = useSelector((state: any) => state.singleProfile.profile);
  return (
    <div
      style={Object.keys(mountedProfile).length ? { display: 'block' } : { display: 'none' }}
      className="header">
      <ProfileInfo />
    </div>
  );
};

export default Header;
