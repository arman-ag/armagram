import React from 'react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import "./chatInput.scss"
const ChatInput = () => {
    return (
        <div className='input-style'>
            <button>
       <BsEmojiSmile color='#A8ABAD' size="25px" /> 
       </button>
       <input placeholder='Message'/>  
        <button>  
       <AiOutlinePaperClip color='#A8ABAD' size="25px"/>
       </button>
        </div>
    )
}

export default ChatInput
