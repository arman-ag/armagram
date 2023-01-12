import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { menuPositionAction, singleProfileAction } from '../../redux/actions';
import './menuStyle.scss';
import { menuItemProps } from './types';

const MenuItem = ({ profileData }: menuItemProps) => {
  const dispatch = useDispatch();
  const { phone } = profileData;
  const messages = useSelector((state: any) => state.message);

  const lastMessage = (messages) => {
    const messageList = messages[phone]?.message;
    return messageList && messageList[messageList?.length - 1];
  };
  const formatTime = (time) => {
    return time && moment(time).format('hh:mm A');
  };
  const receiveMessage = () => {
    dispatch(singleProfileAction.getSingleProfile(phone));
    dispatch(menuPositionAction.position(false));
  };
  return (
    <div className="menu-item" onClick={receiveMessage}>
      <img src={profileData.profileImage} alt="profile " className="profile" />
      <div className="profile-info">
        <div className="profile-info-identity">
          <span>{profileData?.name}</span>
          <span className="last-message-time">{formatTime(lastMessage(messages)?.time)} </span>
        </div>
        <div className="last-message">
          <div className="last-message-text">{lastMessage(messages)?.message}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
