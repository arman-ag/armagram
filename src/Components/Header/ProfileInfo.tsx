import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../redux/actions';
import './headerStyle.scss';
const ProfileInfo = () => {
  const profile = useSelector((state: any) => state.singleProfile.profile);

  const dispatch = useDispatch();
  return (
    <div className="header-profile" onClick={() => dispatch(modalAction.open('profileMenu'))}>
      <img src={profile.profileImage} alt="profile " className="profile" />
      <div className="info">
        <h3>{profile?.name}</h3>
        <span>last seen recently</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
