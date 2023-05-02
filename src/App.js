import "./styles.css";
import React, { useState } from "react";
import Inputs from "./Inputs";

export default function App() {
  // const[inputs, setInputs] = useState({})

  // const getInputValues = (event) => {
  //   let { name, value } = event.target;
  //   let input = {[name]: value}
  //   setInputs({...inputs, ...input})
  // };
  // console.log(inputs);

  return (
    <div className="App">
      {/* <input placeholder="Name" name="name" onChange={getInputValues} />
      <input placeholder="Age" name="age" onChange={getInputValues} /> */}
      <Inputs />
    </div>
  );
}
