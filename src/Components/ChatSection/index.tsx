import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replyAction } from 'redux/actions';
import { sendService } from 'services';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageReply from './MessageReply';
import MessageSend from './MessageSend';
import { messagesType } from './types';

const ChatSection = () => {
  const [text, setText] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [receiveMessage, setReceiveMessage] = useState('');
  const dispatch = useDispatch();

  const display: string = useSelector((state: any) => state.replyStatus.display);
  const messages: messagesType[] = useSelector((state: any) => state.message.message);
  const mounted: boolean = useSelector((state: any) => state.message.mounted);
  const choseType = <T extends messagesType, U extends number>(item: T, index: U) => {
    if (item.type === 'receive') {
      return <MessageReceive text={item.message} key={index} />;
    } else if (item.type === 'send') {
      return <MessageSend text={item.message} key={index} />;
    } else {
      return <MessageReply text={item} key={index} />;
    }
  };

  useEffect(() => {
    const response = async () => {
      const {
        data: { message }
      } = await sendService.getMessage(userMessage);
      setReceiveMessage(message);
    };
    response().catch((err) => {
      console.log(err);
    });
  }, [userMessage]);
  const send = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (text?.length > 0) {
      setText('');
      setUserMessage(text);

      if (display === 'flex') {
        dispatch(replyAction.close());
      }
    }
  };
  return (
    <div style={mounted ? { display: 'flex' } : { display: 'none' }} className="chat-section">
      <div className="chat-section-message">
        {messages.map((item, index) => choseType(item, index))}
      </div>
      <InputSection allMessages={messages} setText={setText} text={text} send={send} />
    </div>
  );
};

export default ChatSection;
