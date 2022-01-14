import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from '../../redux/actions';
import InputSection from './InputSection';
import MessageReceive from './MessageReceive';
import MessageReply from './MessageReply';
import MessageSend from './MessageSend';
import { messagesType } from './types';

const ChatSection = () => {
  const dispatch = useDispatch();
   const messages:messagesType[] = useSelector((state:any) => state.message.message)
   console.log("messages",messages)
  
   useEffect(() => {
   const num:string="+2132789512"
    dispatch(messageAction.getMessage(num));
  }, [dispatch]);

const choseType=(item:messagesType,index:number)=>{
if(item.type==="receive"){
return <MessageReceive text={item.message} key={index}/>
}
else if(item.type==="send"){
return <MessageSend text={item.message} key={index}/>

}
else{
return <MessageReply text={item.message} key={index}/>

}
}
    return (
        <div className="chat-section"> 
        <div className='chat-section-message'>
        {messages.map((item,index)=>choseType(item,index)
        )}
        </div>
      <InputSection allMessages={messages}/>    
        </div>
    )
}

export default ChatSection
