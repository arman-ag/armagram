import React from 'react'
import { messageText } from './types'

const MessageSend = ({text}:messageText) => {
    return (
        <div className='message message-send'>
            {text} 
            <div className='angle'/>
        </div>
    )
}

export default MessageSend
