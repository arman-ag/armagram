import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mapBox: {
    border: "4px solid #4b6584",
    padding: 1,
    borderRadius: 10,
  },
  mainBox: {
    backgroundColor: "#d1d8e0",
    margin: "40px 0",
    width: "100%",
    minHeight: 150,
    borderRadius: 10,
  },
  mainHeading: {
    color: "#4b6584",
  },
}));
export default useStyles;
