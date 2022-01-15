import React from 'react'
import shakira from "../../images/shakira.jpg"
import ProfileContact from './ProfileContact'
import ProfileHeader from './ProfileHeader'
import "./profileMenuStyle.scss"
const ProfileMenu = () => {
    
    return (
        <div className='ProfileMenu'>
            <ProfileHeader/>
            <div className='profileImage'>
<img src={shakira}  alt="profile header" />
<div className='profileImage-caption'>
<span className='profileImage-caption-name'>shakira</span>
<span>last seen recently</span>
</div>
</div>
<ProfileContact/>
        
        </div>
    )
}

export default ProfileMenu
