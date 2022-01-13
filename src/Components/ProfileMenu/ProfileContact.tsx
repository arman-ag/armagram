import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdOutlineAlternateEmail, MdOutlinePhone } from "react-icons/md"
const ProfileContact = () => {
    return (
        <div className='ProfileContact'>
            <div className='ProfileContact-main'>
<MdOutlinePhone size={28}/>
<div className='ProfileContact-box' >
<span className='ProfileContact-text'>+989365725645</span>
<span className='ProfileContact-caption'>Phone</span>
</div>

            </div>
            <div className='ProfileContact-main'>
<MdOutlineAlternateEmail size={28}/>
<div className='ProfileContact-box'>
<span className='ProfileContact-text'>+989365725645</span>
<span className='ProfileContact-caption'>Username</span>
</div>

            </div>
            <div className='ProfileContact-main'>
                <AiOutlineInfoCircle size={28}/>
                <div className='ProfileContact-box'>
                <span className='ProfileContact-text'>dancer , singer , ...</span>
<span className='ProfileContact-caption'>Bio</span>
</div>

            </div>
            
        </div>
    )
}

export default ProfileContact
