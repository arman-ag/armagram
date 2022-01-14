import ChatSection from "../Components/ChatSection";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./app.scss";
function App() {
 
  // const dispatch = useDispatch();

  return (
    <div className="container">
    
    <Header />
<Menu/>
<ChatSection/>
    </div>
  );
}

export default App;
