import React from 'react'
import { useSelector } from 'react-redux'
import shakira from "../../images/shakira.jpg"
import ProfileContact from './ProfileContact'
import ProfileHeader from './ProfileHeader'
import "./profileMenuStyle.scss"
import { profileTypes } from './profileMenuTypes'
const ProfileMenu = () => {
    const profile:profileTypes= useSelector((state:any) => state.singleProfile.profile)
    
    return (
        <div className='ProfileMenu'>
            <ProfileHeader/>
            <div className='profileImage'>
<img src={shakira}  alt="profile header" />
<div className='profileImage-caption'>
<span className='profileImage-caption-name'>{profile.name}</span>
<span>last seen recently</span>
</div>
</div>
<ProfileContact profile={profile}/>
        
        </div>
    )
}

export default ProfileMenu
