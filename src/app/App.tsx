import { useSelector } from "react-redux";
import ChatSection from "../Components/ChatSection";
import Contacts from "../Components/Contacts";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Modal from "../Components/Modal";
import ProfileMenu from "../Components/ProfileMenu";
import "./app.scss";
function App() {
  const status = useSelector((state:any) => state.modal.status)
  
console.log("status",status)
  return (
    <div className="container">
    <Header />
<Menu/>
<ChatSection/>
      {status.open&&(status?.element==="profileMenu" ? <Modal  ><ProfileMenu/></Modal>:
      <Modal>
      <Contacts/>  
        </Modal>)} 
</div>
  );
}

export default App;
