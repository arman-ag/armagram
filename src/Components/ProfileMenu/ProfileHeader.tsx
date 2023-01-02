import { BsPencil } from 'react-icons/bs';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/actions';
const ProfileHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="profile-header">
      <div className="profile-header-close">
        <button onClick={() => dispatch(modalAction.close())}>
          <RiCloseLine style={{ marginBottom: '-3px' }} size="25" color=" #2c3e50" />
        </button>
        <span className="profile-header-title">Profile</span>
      </div>
      <button>
        <BsPencil color="#2c3e50" size="25" />
      </button>
    </div>
  );
};

export default ProfileHeader;
