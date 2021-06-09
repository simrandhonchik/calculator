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
  })
);

const Keypad = (props) => {
  const [number, setNumber] = React.useState(0);
  const [operation, setOperation] = React.useState(0);
  const [myArray, setMyArray] = React.useState([]);
  const [output, setOutput] = React.useState(0);

  //   const addNumberToArray = (props) => {
  //     arr.push(props);
  //   };

  const classes = useStyles();

  //to check if its a number

  let isNumber = function isNumber(value) {
    return typeof value === "number" && isFinite(value);
  };

  //function to process number button click , it adds the number to array
  const numberButtonClick = (value) => () => {
    setNumber(props);
    console.log("props", props);
    myArray.push(props);
    console.log("Array - number", myArray);

    if (props.onNumberButtonClick) {
      props.onNumberButtonClick(value);
    }
  };

  //this function will be called after each number output to calculate all operations/numbers passed
  // the calculated amount will also be displayed on screen

  // const displayOutput = (props) => {
  //   for (var i = 0; i <= myArray.length; i++) {}
  // };

  const operationButtonClick = (value) => () => {
    const getNumber = (value) => {
      //  const input
    };
    if (props.onOperationButtonClick) {
      props.onOperationButtonClick(value);
    }
    myArray.push(props);
    if (props === "AC") {
      myArray.length = 0;
      console.log("ac should clean");
    }

    console.log("Array - operator", myArray);

    // if ( === "AC") {
    //   myArray.length = 0;
    //   console.log("ac should clean");
    // }

    // setOperation(props);
    // myArray.push(props);
    //   switch (props) {
    //     case "AC":
    //       myArray.length = 0;
    //       break;
    //     case "%":
    //       if (myArray[myArray.length - 1] === isNumber) {
    //         return myArray[myArray.length - 1] / 100;
    //       } else return "Error";
    //     case "+/-":
    //       if (
    //         myArray[myArray.length - 1] === isNumber &&
    //         myArray[myArray.length - 1] <= 0
    //       ) {
    //         return myArray[myArray.length - 1] * -1;
    //       }
    //       if (
    //         myArray[myArray.length - 1] === isNumber &&
    //         myArray[myArray.length - 1] >= 0
    //       ) {
    //         return myArray[myArray.length - 1] * -1;
    //       } else return "Error";
    //     case "=":
    //       break;
    //     default:
    //       return;
    //   }
  };

  return (
    <>
      <div className={classes.BOXY}>
        <div className="">
          <Button
            variant="contained"
            className={classes.topDark}
            value="AC"
            onClick={operationButtonClick("AC")}
          >
            AC
          </Button>
          <Button
            variant="contained"
            className={classes.topDark}
            onClick={operationButtonClick("+/-")}
          >
            +/-
          </Button>
          <Button
            variant="contained"
            className={classes.topDark}
            onClick={operationButtonClick("%")}
          >
            %
          </Button>
          <Button
            variant="contained"
            className={classes.sideOperations}
            onClick={operationButtonClick("/")}
          >
            &#247;
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick("7")}>
            7
          </Button>
          <Button variant="contained" onClick={numberButtonClick("8")}>
            8
          </Button>
          <Button variant="contained" onClick={numberButtonClick("9")}>
            9
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick("*")}
            className={classes.sideOperations}
          >
            &#215;
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick("4")}>
            4
          </Button>
          <Button variant="contained" onClick={numberButtonClick("5")}>
            5
          </Button>
          <Button variant="contained" onClick={numberButtonClick("6")}>
            6
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick("-")}
            className={classes.sideOperations}
          >
            -
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button variant="contained" onClick={numberButtonClick("1")}>
            1
          </Button>
          <Button variant="contained" onClick={numberButtonClick("2")}>
            2
          </Button>
          <Button variant="contained" onClick={numberButtonClick("3")}>
            3
          </Button>
          <Button
            variant="contained"
            onClick={operationButtonClick("+")}
            className={classes.sideOperations}
          >
            +
          </Button>
        </div>
        <div className={classes.buttonRow}>
          <Button
            variant="contained"
            className={classes.zero}
            onClick={numberButtonClick("0")}
          >
            0
          </Button>
          <Button
            variant="contained"
            color="#bfbfbf"
            onClick={operationButtonClick(".")}
          >
            .
          </Button>
          <Button
            variant="contained"
            className={classes.sideOperations}
            onClick={operationButtonClick("=")}
          >
            =
          </Button>
        </div>
      </div>
    </>
  );
};

export default Keypad;

/*
[vals, setVals] = useState([null, null])

[operandApplied, setOperandApplied] = useState(null):
[arr , setArr] = useState([])
[valToFill, setValToFill] = useState(0);

onOperandButtonClick(operand){
    if (vals[0] === null){
        error
    }
    else if (vals[1] === null){
        
        setOperandApllied(operand)
        // val2 starts getting populated
        setValsToFill(1);
        setArr([]);
    }
    else if (operand !== null){
        let result = eval(vals[0] + operandApplied + vals[1])
        setVals([result, null]);
        setValsToFill(1);
        setArr([]);
        setOperandApplied(operand);

        // vals[0] + operand
    }
    else{
        error
    }
}

onNumberButtonClick(number){
    arr.append(number); [3, 5]
    let oldVals = vals; [ 30 , 3] and operandApplied = '*';

    oldVals[valToFill] = float("".join(arr)); [30 , 35] | 
    setVals(oldVals);
}
*/
