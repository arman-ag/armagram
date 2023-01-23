import { useEffect, useRef } from 'react';
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
    messageContainer.current?.scrollTo({
      top: messageContainer.current.scrollHeight,
      behavior: 'smooth'
    });
  });
  return (
    <div className="container" ref={messageContainer}>
      <Header />
      <Menu />
      <ChatSection />
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
