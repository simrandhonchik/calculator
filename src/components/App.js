//import "./App.css";
import React, { useState } from "react";
//import DisplayScreen from "./DisplayScreen";
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
  const [operator, setOperator] = React.useState("");
  const [number, setNumber] = React.useState(0);
  const operationButtonClick = (value) => {
    console.log(" Operator parents", value);
    setOperator(value);
  };
  const numberButtonClick = (value) => {
    console.log(" Number parents", value);
    setNumber(value);
  };
  return (
    <div className={classes.OuterContainer}>
      <Keypad
        onOperationButtonClick={operationButtonClick}
        onNumberButtonClick={numberButtonClick}
      />
    </div>
  );
};
export default App;
