import React from 'react'
import { BsPencil } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
const ProfileHeader = () => {
    return (
        <div className='profile-header'>
            <div className='profile-header-close'>
            <button>  <FaTimes size="25"  />
          </button>
          <span className='profile-header-title'>Profile</span>
              </div>
          <button>
              <BsPencil size="25" />
          </button>

        </div>
    )
}

export default ProfileHeader
