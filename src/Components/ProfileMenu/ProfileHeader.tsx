import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/actions';
const ProfileHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="profile-header">
      <div className="profile-header-close">
        <span className="profile-header-title">profile</span>
        <button onClick={() => dispatch(modalAction.close())}>
          <RiCloseLine size="25" color=" #2c3e50" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
