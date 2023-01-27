import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from 'redux/actions';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';

const ChatSection = ({ children }) => {
  const [show, SetShow] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state: any) => state.message);
  const profile = useSelector((state: any) => state.singleProfile.profile);
  const { phone, id } = profile;
  const chatContainer = useRef(null);
  //prepare text to send
  const send = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (text?.length > 0 && messages.sendPermission) {
      setText('');
      dispatch(messageAction.userMessage(text, phone, id));
    }
    return messages.sendPermission;
  };
  useEffect(() => {
    if (chatContainer.current === null) {
      return;
    }
    const height = chatContainer.current.offsetHeight;
    if (height > 750) {
      SetShow(true);
    } else {
      SetShow(false);
    }
  });

  const choseType = (item, index) => {
    if (index % 2 == 0) {
      return <MessageSend time={item.time} text={item.message} key={index} />;
    } else {
      return <MessageReceive time={item.time} text={item.message} key={index} />;
    }
  };
  return (
    <>
      {Object.keys(profile).length > 0 && (
        <div className="chat-section">
          <div className="chat-section-message" ref={chatContainer}>
            {messages?.[phone]?.message?.map((item, index) => choseType(item, index))}
            {show && children}
          </div>
          <InputSection setText={setText} text={text} send={send} profile={profile} />
        </div>
      )}
    </>
  );
};

export default ChatSection;
