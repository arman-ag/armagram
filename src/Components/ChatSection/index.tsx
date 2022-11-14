import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from 'redux/actions';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';

const ChatSection = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const display: string = useSelector((state: any) => state.replyStatus.display);
  const messages = useSelector((state: any) => state.message);
  const mounted: boolean = useSelector((state: any) => state.message.mounted);
  console.log(messages);
  //prepare text to send
  const send = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (text?.length > 0) {
      setText('');
      dispatch(messageAction.send(text, true));

      if (display === 'flex') {
        // dispatch(replyAction.close());
      }
    }
  };
  //chose message type (change it to switch case!!)
  const choseType = (item, index) => {
    if (item?.receiveMessage) {
      return <MessageReceive text={item.receiveMessage} key={index} />;
    } else {
      return <MessageSend text={item.userMessage} key={index} />;
    }
  };
  return (
    <div style={mounted ? { display: 'flex' } : { display: 'none' }} className="chat-section">
      <div className="chat-section-message">
        {messages?.allMessages?.map((item, index) => choseType(item, index))}
      </div>
      <InputSection allMessages={messages} setText={setText} text={text} send={send} />
    </div>
  );
};

export default ChatSection;
