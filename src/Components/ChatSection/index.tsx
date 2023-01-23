import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from 'redux/actions';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';

const ChatSection = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);
  const messages = useSelector((state: any) => state.message);
  const profile = useSelector((state: any) => state.singleProfile.profile);
  const { phone, id } = profile;

  useLayoutEffect(() => {
    if (messagesEndRef.current === null) {
      return;
    }
    messagesEndRef.current.style.paddingBottom = '4.2rem';
  }, [messages]);

  useEffect(() => {
    console.log('a');
    if (messagesEndRef.current === null) {
      return;
    }
    messagesEndRef.current.style.paddingBottom = '0';
  }, []);

  //prepare text to send
  const send = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (text?.length > 0 && messages.sendPermission) {
      setText('');
      dispatch(messageAction.userMessage(text, phone, id));
    }
    return messages.sendPermission;
  };
  const choseType = (item, index) => {
    messagesEndRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });

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
          <div className="chat-section-message" ref={messagesEndRef}>
            {messages?.[phone]?.message?.map((item, index) => choseType(item, index))}
          </div>
          <InputSection setText={setText} text={text} send={send} profile={profile} />
        </div>
      )}
    </>
  );
};

export default ChatSection;
