import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { singleProfileAction } from '../../redux/actions';
import './menuStyle.scss';
import { menuItemProps } from './types';

const MenuItem = ({ profileData }: menuItemProps) => {
  const dispatch = useDispatch();
  // const messages = useSelector((state: any) => state.message.message);
  // const state = useSelector((state: any) => state);

  const phone: string = profileData.phone;

  useEffect(() => {
    // dispatch(messageAction.getMessage(phone, false));
  }, [dispatch, phone]);

  const receiveMessage = () => {
    dispatch(singleProfileAction.getSingleProfile(phone));
  };

  return (
    <div className="menu-item" onClick={receiveMessage}>
      <img src={profileData.profileImage} alt="profile " className="profile" />
      <div className="profile-info">
        <h3>{profileData?.name}</h3>
        <div className="last-message">
          {/* <span className="last-message-text">{messages[messages.length - 1]?.message} </span> */}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
