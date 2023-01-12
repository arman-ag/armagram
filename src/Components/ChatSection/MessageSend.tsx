import moment from 'moment';
import { messageText } from './types';

const MessageSend = ({ text, time }: messageText) => {
  const formatTime = (time) => {
    return moment(time).format('hh:mm A');
  };
  return (
    <div className="message message-send">
      {text}
      <div className="time-section">{formatTime(time)}</div>
      <div className="angle" />
    </div>
  );
};

export default MessageSend;
