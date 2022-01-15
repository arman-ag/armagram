import { useSelector } from "react-redux";
import ChatSection from "../Components/ChatSection";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Modal from "../Components/Modal";
import ProfileMenu from "../Components/ProfileMenu";
import "./app.scss";
function App() {
  const isOpen = useSelector((state:any) => state.modal.openStatus)
  

  return (
    <div className="container">
    <Header />
<Menu/>
<ChatSection/>
 
      {isOpen && <Modal  ><ProfileMenu/></Modal>} 
</div>
  );
}

export default App;
