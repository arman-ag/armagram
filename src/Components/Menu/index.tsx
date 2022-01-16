import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalAction, profileAction } from "../../redux/actions";
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
      <div className="menu-header">
         <div className='search-box'>
            <button>
                <AiOutlineSearch color='#A8ABAD' size="25px" /> 
            </button>
       <input  placeholder='Search...' type="text" />  
           
        </div>
      <button className="contact-list" onClick={() => dispatch(modalAction.open("contact"))} > contact list </button>
      </div>
   { profile.map((item:any,index:number)=><MenuItem profileData={item}  key={item.id}/>)

   }
    
    </div>
  )
};

export default Menu;
