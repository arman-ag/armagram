import React from 'react'
import { BsReply } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { replyAction } from 'redux/actions'
import { messageText } from './types'

const MessageReceive = ({text}:messageText) => {
const dispatch = useDispatch()

    return (
        <div className='message message-receive'>
       <div className='reply-container'>
            {text} 
            <button onClick={()=>dispatch(replyAction.open(text))} className='message-reply reply-receive'><BsReply size={20} color="#3390ec"/>
            </button>
            </div>
            <div className='angle'/>

        </div>
    )
}

export default MessageReceive
