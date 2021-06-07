// Import React (Mandatory Step).
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    inputField: {
      width: "256px",
      height: "40px",
      border: "1px solid #616161",
      background: "#616161",
      borderRadius: "5px",
      color: "white",
      textAlign: "right",
    },
  })
);

const DisplayScreen = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.inputField}>
      {/* <input type="text" class
      Name={classes.inputField} value={number} />
      {number} */}
      {props.number}
    </div>
  );
};

// Export Output Screen Row.
export default DisplayScreen;