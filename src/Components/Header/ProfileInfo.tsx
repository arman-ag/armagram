import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../redux/actions';
import './headerStyle.scss';
const ProfileInfo = () => {
  const profile = useSelector((state: any) => state.singleProfile.profile);
  const messages = useSelector((state: any) => state.message);
  const dispatch = useDispatch();

  return (
    <div className="header-profile" onClick={() => dispatch(modalAction.open('profileMenu'))}>
      <img src={profile.profileImage} alt="profile " className="profile" />
      <div className="info">
        <h3>{profile?.name}</h3>
        {messages?.[profile.phone]?.message.length % 2 === 1 ? (
          <div className="typing-box">
            <div className="typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="typing-text">typing</span>
          </div>
        ) : (
          <span className="profile-status">online</span>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
