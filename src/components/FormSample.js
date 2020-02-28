import React, { useState } from "react";

let Form = () => {
  let [input, setInput] = useState({
    firstName: "",
  });

  let { firstName } = input;

  let handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <span>{` ${firstName && " name is:"} ${firstName}`}</span>
      </div>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Form;
