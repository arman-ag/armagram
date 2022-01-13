import { useDispatch } from "react-redux";
import "./app.css";
import useStyles from "./appStyle";
function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <div>this is a tests</div>
    </>
  );
}

export default App;
