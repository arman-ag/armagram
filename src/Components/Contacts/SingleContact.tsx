import React from 'react';
import "./contactStyle.scss";


const SingleContact = ({profileData}:any) => {
   
  
    return (
        <div className='single-contact'>
              <img src={require('./../../assets/images/shakira.jpg')} alt="profile image" className="profile" />
      <div className="profile-info">
        <h3>{profileData?.name}</h3>
        <div className='single-contact-phone'>
        <span className='single-contact-phone-text'>{profileData?.phone} </span>
        
        </div>
      </div>
        </div>
    )
}

export default SingleContact
