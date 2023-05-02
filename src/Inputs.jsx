import React, { useState } from "react";
// import "./styles.css";

const Inputs = () => {
  const [inputs, setInputs] = useState({});

  const getInputValue = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  console.log(inputs);
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={getInputValue}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={getInputValue}
      />
      <input
        type="number"
        placeholder="Years of Experience"
        name="yoe"
        onChange={getInputValue}
      />
    </div>
  );
};

export default Inputs;
