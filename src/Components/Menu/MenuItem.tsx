import React from 'react';
import shakira from "./../../images/shakira.jpg";
import "./menuStyle.scss";

const MenuItem = () => {
    return (
        <div className='menu-item'>
              <img src={shakira} alt="profile image" className="profile" />
      <div className="profile-info">
        <h3>shakira</h3>
        <div className='last-message'>
        <span className='last-message-text'>cljaskcksahcuh cnjasbcas </span>
        <span className='last-message-count'>15</span>
        </div>
      </div>
        </div>
    )
}

export default MenuItem
