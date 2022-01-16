import React, { useState } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile, BsReply } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { messageAction } from '../../redux/actions';
import "./chatSection.scss";
import { allMessageType } from './types';

const InputSection = ({allMessages}:allMessageType) => {
  const dispatch = useDispatch();
const [text, setText] = useState("")
    const textEntry=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }
    const send=(e:React.MouseEvent)=>{
            e.preventDefault();
            const newMessage=[...allMessages,{type:"send",message:text}]
        const num:string="+2132789512"
        dispatch(messageAction.sendMessage(num,newMessage));
setText("")

    }
    return (
        <div className='send-box'>
            <div className="send-box-input">
            <div className="repl-box">
                <BsReply color="#3390EC" size={30} />
                <div className='reply-box-horizontal'/>
                <span>
                cscasc
                </span>
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
