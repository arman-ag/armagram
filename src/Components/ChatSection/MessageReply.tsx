import React from 'react'
import { messageText } from './types'

const MessageReply = ({text}:messageText) => {
    return (
        
            <div className='message '>
         {text} re
        </div> 
    )
}

export default MessageReply
