import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/actions';
import './contactStyle.scss';
const ContactHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="contact-header">
      <button onClick={() => dispatch(modalAction.close())}>
        <RiCloseLine style={{ marginBottom: '-3px' }} size="25" color=" #2c3e50" />
      </button>
      <div className="contact-header-title">Profile</div>
    </div>
  );
};

export default ContactHeader;
