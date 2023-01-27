import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import ChatSection from '../Components/ChatSection';
import Contacts from '../Components/Contacts';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Modal from '../Components/Modal';
import ProfileMenu from '../Components/ProfileMenu';
import './app.scss';
const App: React.FC = () => {
  const messageContainer = useRef(null);
  const status = useSelector((state: any) => state.modal.status);
  const err = useSelector((state: any) => state.message);
  const messages = useSelector((state: any) => state.message);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = messageContainer.current.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 0) {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    messageContainer.current?.scrollTo({
      top: messageContainer.current.scrollHeight,
      behavior: 'smooth'
    });
  };
  err?.openModal &&
    Swal.fire({
      title: 'Error!',
      text: err.message,
      icon: 'error',
      confirmButtonText: 'ok'
    }).then((res) => res?.value && window.location.reload());

  useEffect(() => {
    if (messageContainer.current == null) {
      return;
    }
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (messageContainer.current == null) {
      return;
    }
    messageContainer.current.addEventListener('scroll', toggleVisible);
  });
  return (
    <div className="container" ref={messageContainer}>
      <Header />
      <Menu />
      <ChatSection>
        <button
          onClick={scrollToBottom}
          style={{ display: visible ? 'inline' : 'none' }}
          className="scroll-button">
          <IoIosArrowDown size="25" />
        </button>
      </ChatSection>
      {status?.open &&
        (status?.element === 'profileMenu' ? (
          <Modal>
            <ProfileMenu />
          </Modal>
        ) : (
          <Modal>
            <Contacts />
          </Modal>
        ))}
    </div>
  );
};
export default App;
