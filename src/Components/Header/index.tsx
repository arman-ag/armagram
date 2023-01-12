import { MdArrowBack } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './headerStyle.scss';
import ProfileInfo from './ProfileInfo';
const Header = () => {
  const mountedProfile = useSelector((state: any) => state.singleProfile.profile);
  return (
    <div
      style={{ display: Object.keys(mountedProfile).length ? 'block' : 'none' }}
      className="header">
      <button>
        <MdArrowBack color="#A8ABAD" size="25px" />
      </button>
      <ProfileInfo />
    </div>
  );
};

export default Header;
