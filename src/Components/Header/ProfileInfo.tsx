import React from "react";
import shakira from "./../../images/shakira.jpg";
import "./headerStyle.scss";
const ProfileInfo = () => {
  return (
    <div className="header">
      <img src={shakira} alt="profile image" className="profile" />
      <div className="profile-info">
        <h3>shakira</h3>
        <span>last seen recently</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
