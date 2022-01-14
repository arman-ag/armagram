import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction } from '../../redux/actions';
import InputSection from './InputSection';
import Message from './Message';
const ChatSection = () => {
  const dispatch = useDispatch();
   const state = useSelector(state => state)
   console.log("state",state)
  useEffect(() => {
   const num:string="+2132789512"
    dispatch(messageAction.getMessage(num));
  }, [dispatch]);
    return (
        <div className="chat-section"> 
      <div>
        
        <Message/>
        </div>  
      <InputSection/>    
        </div>
    )
}

export default ChatSection
