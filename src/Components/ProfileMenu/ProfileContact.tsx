import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdOutlineAlternateEmail, MdOutlinePhone } from "react-icons/md"
import { propProfileTypes } from './profileMenuTypes'
const ProfileContact = ({profile}:propProfileTypes) => {
    return (
        <div className='ProfileContact'>
            <div className='ProfileContact-main'>
<MdOutlinePhone size={28}/>
<div className='ProfileContact-box' >
<span className='ProfileContact-text'>{profile.phone}</span>
<span className='ProfileContact-caption'>Phone</span>
</div>

            </div>
            <div className='ProfileContact-main'>
<MdOutlineAlternateEmail size={28}/>
<div className='ProfileContact-box'>
<span className='ProfileContact-text'>{profile.user}</span>
<span className='ProfileContact-caption'>Username</span>
</div>

            </div>
            <div className='ProfileContact-main'>
                <AiOutlineInfoCircle size={28}/>
                <div className='ProfileContact-box'>
                <span className='ProfileContact-text'>{profile.bio}</span>
<span className='ProfileContact-caption'>Bio</span>
</div>

            </div>
            
        </div>
    )
}

export default ProfileContact
