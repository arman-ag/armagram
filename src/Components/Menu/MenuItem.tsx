import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction, profileAction } from '../../redux/actions';
import "./menuStyle.scss";

const MenuItem = ({profileData}:any) => {
  // const [message, setMessage] = useState([])
   const dispatch = useDispatch();
   const messages = useSelector((state:any) => state.message.message)
   
   useEffect(() => {
     const num:string=profileData.phone
     dispatch(messageAction.getMessage(num));
    }, [dispatch]);
    
  //   useEffect(() => {
  //  setMessage(messages[messages.length - 1])
  // }, [messages])
  // console.log("lastMessage",message)
  const receiveMessage=(phone:string)=>{
     dispatch(messageAction.getMessage(phone));
    dispatch(profileAction.getSingleProfile(phone))


  }
    return (
        <div className='menu-item' onClick={()=>receiveMessage(profileData.phone)}>
              <img src={require('./../../assets/images/shakira.jpg')} alt="profile image" className="profile" />
      <div className="profile-info">
        <h3>{profileData.name}</h3>
        <div className='last-message'>
        <span className='last-message-text'>{messages[messages.length - 1].message} </span>
        
        </div>
      </div>
        </div>
    )
}

export default MenuItem
