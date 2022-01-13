import React from 'react';
import "./headerStyle.scss";
import ProfilePicture from './ProfilePicture';
const Header = () => {
    return (
        <div className='header' >
            <ProfilePicture/>
            <div className='profile-info'>
<h3>shakira</h3>
<span>last seen recently</span>

            </div>

        </div>
    )
}

export default Header
