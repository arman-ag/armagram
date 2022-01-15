import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../../redux/actions";
import MenuItem from "./MenuItem";
import "./menuStyle.scss";

const Menu = () => {
  const dispatch = useDispatch()
  const profile:any = useSelector((state:any) => state.profile.profile)
  useEffect(() => {
    dispatch(profileAction.getAllProfile())
  }, [dispatch])
  return (
    <div className="menu">
   { profile.map((item:any,index:number)=><MenuItem profileData={item}  key={index}/>)

   }
    
    </div>
  )
};

export default Menu;
