import moment from 'moment';
import { messageText } from './types';

const MessageReceive = ({ text, time }: messageText) => {
  const formatTime = (time) => {
    return moment(time).format('hh:mm A');
  };
  return (
    <div className="message message-receive">
      {text}
      <div style={{ display: 'flex', justifyContent: 'end' }} className="time-section">
        {formatTime(time)}
      </div>
      <div className="angle" />
    </div>
  );
};

export default MessageReceive;
