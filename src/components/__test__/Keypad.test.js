import React from 'react'; 
import ReactDOM  from 'react-dom';
import Keypad from '../Keypad';
import {render} from '@testing-library/react';

import "jest-dom/extend-expect";

//to ensure the component rendeers 
it("renders without crashing", ()=>{
    const div =  document.createElement("div");
    ReactDOM.render(<Keypad></Keypad>, div)
})

// it("renders Keypad correctly", ()=>{
//  const {getByTestId}= render(<Keypad ></Keypad>);
//  expect(getByTestId("Keypad")).toHaveTextContent(""); 
// })