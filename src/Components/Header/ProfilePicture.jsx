import React from "react";
import shakira from "./../../images/shakira.jpg";
import "./headerStyle.scss";
const ProfilePicture = () => {
  return (
    <div>
      <img src={shakira} alt="profile image" className="profile" />
    </div>
  );
};

export default ProfilePicture;
