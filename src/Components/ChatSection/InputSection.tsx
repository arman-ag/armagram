import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile, BsReply } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction, replyAction } from '../../redux/actions';
import "./chatSection.scss";
import { allMessageType } from './types';

const InputSection = ({allMessages}:allMessageType) => {
    const [text, setText] = useState("")

    const dispatch = useDispatch();
    const display:string = useSelector((state:any) => state.replyStatus.display)
    const phone:string = useSelector((state:any) => state.singleProfile.profile.phone)
    const replyText:string = useSelector((state:any) => state.replyStatus.replyText)

    const textEntry=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const send=(e:React.MouseEvent)=>{
        
            e.preventDefault();
            if(text.length>0){
            const newMessage=[...allMessages,{type:"send",message:text}]
            setTimeout(() => {
  dispatch(messageAction.sendMessage(phone,newMessage,true))
}, 2000)
       ;
setText("")

if(display==="flex"){
  const newMessage=[...allMessages,{type:"reply",message:text,replyMessage:replyText}]
dispatch(replyAction.close())
            setTimeout(() => {
  dispatch(messageAction.sendMessage(phone,newMessage,true))
}, 2000)

}

}


    }
    return (
        <div className='send-box'>
         <div className="send-box-input">
                
            <div style={{display:display}} className="reply-box">

                <div className='reply-box-figure'>
                <BsReply color="#3390EC" size={30} />
                <div className='reply-box-horizontal'/>
                </div>

               
                    <div className='reply-box-text-number'> {phone}</div>
                    <div className='container-text'>
                     <button className='container-text-button' onClick={() => dispatch(replyAction.close())}>
                    <RiCloseLine style={{ marginBottom: "-3px" }}  size="25" color=" #2c3e50"/>
          </button>
                <div className='reply-box-text-message'>
                {replyText}
                </div>
                </div>
            </div>


        <div className='input-style'>
            <button>
                <BsEmojiSmile color='#A8ABAD' size="25px" /> 
            </button>
       <input value={text} placeholder='Message' type="text" onChange={textEntry}/>  
            <button>  
            <AiOutlinePaperClip color='#A8ABAD' size="25px"/>
            </button>
        </div>
        </div>
        <div className='send-box-button' >
        <button type="submit" onClick={send}>
<IoMdSend size={37} color="#3390EC"/>
        </button>
        </div>
        </div>
    )
}

export default InputSection
