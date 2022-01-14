import React from 'react'
import { messageText } from './types'

const MessageReceive = ({text}:messageText) => {
    return (
        <div className='message message-receive'>
       {text}
            <div className='angle'/>

        </div>
    )
}

export default MessageReceive
