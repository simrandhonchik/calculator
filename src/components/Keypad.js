import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    topDark: {
      backgroundColor: "#464646",
      color: "white",
    },
    sideOperations: {
      backgroundColor: "orange",
      color: "white",
    },

    zero: {
      flexBasis: "150px",
    },
    buttonRow: {
      display: "flex",
      width: "256px",
    },
    screenRow: {
      display: "flex",
      justifyContent: "center",
    },
    BOXY: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
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

 const Keypad = (props) => {
  const [number, setNumber] = React.useState(0);
  const [operator, setOperator] = React.useState('');
  const [myArray, setMyArray] = React.useState([]);
  const [output, setOutput] = React.useState('');

  const classes = useStyles();

  let singleOperators = ['+/-', '%,'];
  let doubleOperators = ['+','-','*','/'];
  //to check if its a number

  // let isNumber = function isNumber(value) {
  //   return typeof value === "number" && isFinite(value);
  // };

  //function to process number button click , it adds the number to array
  const numberButtonClick = (props) =>  {
    setNumber(props);
    console.log("props", props);
    myArray.push(props);
    console.log("Array ", myArray);
    console.log("Array last element ", myArray[myArray.length - 1]);
  };

  const operationButtonClick = (props) =>  {

    if (props !== "=") {
    myArray.push(props);
    setOperator(props);}
    let lastElement = myArray[myArray.length -1];
    // let operatorArray = ['+','-','/','*','.','AC','+/-','%'];
    // let numberArray = ['0','1','2','3','4','5','6','7','8','9'];

    console.log("Array ", myArray);

    let inputString = myArray.join(''); 
    console.log(inputString);

    
    if (props === "="){
      console.log("yes im in = block")
      
      // console.log("inputString" ,inputString);
      if (inputString.includes("+/-") || inputString.includes("%") ) {
        console.log("We in the block");
        console.log("props in = block", props);
        if (inputString.includes("+/-")){
          console.log("this my array sis ", myArray)
          console.log("number before last operator", myArray[myArray.length -2])
          let lastNumber = myArray[myArray.length -2];
          console.log("lastNumber", lastNumber);
          let outputN = lastNumber * -1;
          console.log("outputN :", outputN);
          setMyArray(outputN);
        }
        if (inputString.includes("%") ){
          console.log("at %", myArray[myArray.length -2])
          let lastNumber = myArray[0];
          let outputN = lastNumber/100;
          console.log(outputN);
          setMyArray(outputN);
        };
      }
      else{
        setMyArray([eval(inputString)]);
      }
    }
    
    if (props === "AC") {
      myArray.length = 0;
      setOutput("0");
      setNumber("0");
      setOperator("");
      console.log("ac should clean");
      }

    }
    
  return (
    <>
    <div className={classes.inputField}>
   <div>
      {operator}
      {number}
   </div>
      {/* {myArray.join('')} */}
      {output}
    </div>
      <div className={classes.BOXY}>
        <div className="">
          <Button
            variant="contained"
            className={classes.topDark}
            value="AC"
            // onClick={operationButtonClick("AC")}
            onClick={operationButtonClick.bind(this, "AC")}
          >
            AC
          </Button>
          <Button
            variant="contained"
            className={classes.topDark}
            onClick={operationButtonClick.bind(this, "+/-")}
          >
            +/-
          </Button>
          <Button
            variant="contained"
            className={classes.topDark}
            onClick={operationButtonClick.bind(this, "%")}
          >
            %
          </Button>
          <Button
            variant="contained"
            className={classes.sideOperations}
            onClick={operationButtonClick.bind(this, "/")}
          >
            &#247;
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "7")}>
            7
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "8")}>
            8
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "9")}>
            9
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick.bind(this, "*")}
            className={classes.sideOperations}
          >
            &#215;
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "4")}>
            4
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "5")}>
            5
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "6")}>
            6
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick.bind(this, "-")}
            className={classes.sideOperations}
          >
            -
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "1")}>
            1
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "2")}>
            2
          </Button>
          <Button variant="contained" onClick={numberButtonClick.bind(this, "3")}>
            3
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick.bind(this, "+")}
            className={classes.sideOperations}
          >
            +
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button
            variant="contained"
            className={classes.zero}
            onClick={numberButtonClick.bind(this, "0")}
          >
            0
          </Button>
          <Button
            variant="contained"
            color="#bfbfbf"
            onClick={operationButtonClick.bind(this, ".")}
          >
            .
          </Button>
          <Button
            variant="contained"
            className={classes.sideOperations}
            onClick={operationButtonClick.bind(this, "=")}
          >
            =
          </Button>
        </div>
      </div>
    </>
  );
 }


  export default Keypad;
  