import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../redux/actions";
import shakira from "./../../images/shakira.jpg";
import "./headerStyle.scss";
const ProfileInfo = () => {
   const profile = useSelector((state:any) => state.singleProfile.profile)
console.log({profile})
const dispatch=useDispatch()
  return (
    <div className="header-profile"onClick={() => dispatch(modalAction.open("profileMenu"))}>
      <img src={shakira} alt="profile image" className="profile" />
      <div className="info">
        <h3>{profile.name}</h3>
        <span>last seen recently</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
