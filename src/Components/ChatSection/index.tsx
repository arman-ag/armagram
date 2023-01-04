import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from 'redux/actions';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';

const ChatSection = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const display: string = useSelector((state: any) => state.replyStatus.display);
  const messages = useSelector((state: any) => state.message);
  console.log(messages);
  const profile = useSelector((state: any) => state.singleProfile.profile);
  const { phone } = profile;

  //prepare text to send
  const send = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (text?.length > 0) {
      setText('');
      dispatch(messageAction.userMessage(text, phone));
    }
  };
  const choseType = (item, index) => {
    if (index % 2 == 0) {
      return <MessageSend text={item} key={index} />;
    } else {
      return <MessageReceive text={item} key={index} />;
    }
  };
  return (
    <div
      style={Object.keys(profile).length ? { display: 'flex' } : { display: 'none' }}
      className="chat-section">
      <div className="chat-section-message">
        {messages?.[phone]?.message?.map((item, index) => choseType(item, index))}
      </div>
      <InputSection setText={setText} text={text} send={send} />
    </div>
  );
};

export default ChatSection;
