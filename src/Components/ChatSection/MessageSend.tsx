import moment from 'moment';
import { BsReply } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { replyAction } from 'redux/actions';
import { messageText } from './types';

const MessageSend = ({ text, time }: messageText) => {
  const formatTime = (time) => {
    return moment(time).format('hh:mm A');
  };
  const dispatch = useDispatch();
  return (
    <div className="message message-send">
      <div className="reply-container">
        <button onClick={() => dispatch(replyAction.open(text))} className="message-reply">
          <BsReply size={20} color="#3390ec" />
        </button>
        {text}
      </div>
      <div className="time-section">{formatTime(time)}</div>
      <div className="angle" />
    </div>
  );
};

export default MessageSend;
