import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageAction, singleProfileAction } from '../../redux/actions';
import "./menuStyle.scss";

const MenuItem = ({profileData}:any) => {
  // const [message, setMessage] = useState([])
   const dispatch = useDispatch();
   const messages = useSelector((state:any) => state.message.message)
   const state = useSelector((state:any) => state)
   
   const phone:string=profileData.phone
  //  console.log("messages",messages)
  //  console.log("state",state)
   useEffect(() => {
     dispatch(messageAction.getMessage(phone,false));
    }, [dispatch,phone]);
    
  
  const receiveMessage=()=>{
     dispatch(messageAction.getMessage(phone,true));
    dispatch(singleProfileAction.getSingleProfile(phone))
  }
  const image=()=>{
    switch (profileData?.name) {
      case "Shakira":
       
      return( <img src={require('assets/images/shakira.jpg')} alt="profile " className="profile" />);
        

         case "Joe Biden":
       return(<img src={require('assets/images/biden.jpg')} alt="profile " className="profile" />)
    
      default:
        
        break;
    }
  }
    return (
        <div className='menu-item' 
        onClick={receiveMessage}
        >
          {image()}
      <div className="profile-info">
        <h3>{profileData?.name}</h3>
        <div className='last-message'>
        <span className='last-message-text'>{messages[messages.length - 1]?.message} </span>
        
        </div>
      </div>
        </div>
    )
}

export default MenuItem
