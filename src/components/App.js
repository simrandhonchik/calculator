//import "./App.css";
import React from "react";
import DisplayScreen from "./DisplayScreen";
import Keypad from "./Keypad";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    OuterContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.OuterContainer}>
      <DisplayScreen />
      <Keypad />
    </div>
  );
};
export default App;
