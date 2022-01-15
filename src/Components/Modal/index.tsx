import React from 'react';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/actions';
import "./modalStyle.scss";
import { modalType } from './types';


const Modal = ({ children }: modalType) => {
  const dispatch = useDispatch()
    return (
        <>
          <div className="darkBG" onClick={() => dispatch(modalAction.close())} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">
           {children}
          </div>
        </div>
      </div>
    
          </>
    )
}

export default Modal
