import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileAction } from '../../redux/actions'
import ContactHeader from './ContactHeader'
import "./contactStyle.scss"
import SingleContact from './SingleContact'
const Contacts = () => {
   const dispatch = useDispatch();
   const profiles = useSelector((state:any) => state.profile.profile)
useEffect(() => {
    dispatch(profileAction.getAllProfile())
    
}, [dispatch])
console.log("csccacascascasc",profiles)
    return (
        <div className='contact-menu'>
            <ContactHeader/>
            {profiles?.map((item:any)=><SingleContact profileData={item} key={item.id}/>
            )}
        </div>
    )
}

export default Contacts