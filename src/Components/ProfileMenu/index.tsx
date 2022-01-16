import React from 'react'
import { useSelector } from 'react-redux'
import ProfileContact from './ProfileContact'
import ProfileHeader from './ProfileHeader'
import "./profileMenuStyle.scss"
import { profileTypes } from './profileMenuTypes'
const ProfileMenu = () => {
    const profile:profileTypes= useSelector((state:any) => state.singleProfile.profile)
    // const logo =
    console.log(typeof profile?.profileImage)

    return (
        <div className='ProfileMenu'>
            <ProfileHeader/>
            <div className='profileImage'>
{/* <img src={require(profile?.profileImage)}  alt="profile header" /> */}
<img src={require("assets/images/shakira.jpg")}  alt="profile header" />
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
