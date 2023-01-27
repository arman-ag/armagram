import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { modalAction } from '../../redux/actions';
import './contactStyle.scss';
const ContactHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="contact-header">
      <div className="contact-header-title">select some one to chat</div>
      <button onClick={() => dispatch(modalAction.close())}>
        <RiCloseLine style={{ marginBottom: '-3px' }} size="25" color=" #2c3e50" />
      </button>
    </div>
  );
};

export default ContactHeader;
