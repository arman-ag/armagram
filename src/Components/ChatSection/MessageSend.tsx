import React from 'react'
import { BsReply } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { replyAction } from 'redux/actions'
import { messageText } from './types'

const MessageSend = ({text}:messageText) => {
const dispatch = useDispatch()
    return (
        <div className='message message-send'>
            <div className='reply-container'>
            <button onClick={()=>dispatch(replyAction.open(text))} className='message-reply'><BsReply size={20} color="#3390ec"/>
            </button>
            {text} 
            </div>
            <div className='angle'/>
        </div>
    )
}

export default MessageSend
