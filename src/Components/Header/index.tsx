import useScreenSize from 'hooks/useScreenSize';
import { MdArrowBack } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { menuPositionAction } from 'redux/actions';
import './headerStyle.scss';
import ProfileInfo from './ProfileInfo';
const Header = () => {
  const [width] = useScreenSize();
  const dispatch = useDispatch();
  const mountedProfile = useSelector((state: any) => state.singleProfile.profile);

  return (
    <div
      style={{ display: Object.keys(mountedProfile).length ? 'flex' : 'none' }}
      className="header">
      <button
        className="header-back-button"
        style={{ display: width < 500 ? 'inline-block' : 'none' }}
        onClick={() => {
          dispatch(menuPositionAction.position(true));
        }}>
        <MdArrowBack color="#A8ABAD" size="1.35rem" />
      </button>
      <ProfileInfo />
    </div>
  );
};

export default Header;
