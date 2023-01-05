import moment from 'moment';
import { BsReply } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { replyAction } from 'redux/actions';
import { messageText } from './types';

const MessageReceive = ({ text, time }: messageText) => {
  const dispatch = useDispatch();
  const formatTime = (time) => {
    return moment(time).format('hh:mm A');
  };
  return (
    <div className="message message-receive">
      <div className="reply-container">
        {text}
        <button
          onClick={() => dispatch(replyAction.open(text))}
          className="message-reply reply-receive">
          <BsReply size={20} color="#3390ec" />
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }} className="time-section">
        {formatTime(time)}
      </div>
      <div className="angle" />
    </div>
  );
};

export default MessageReceive;
