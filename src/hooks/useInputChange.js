import { useState } from "react";

let useInputChange = (defaultValues = {}) => {
  let [input, setInput] = useState(defaultValues);

  let handleInputChange = ({ currentTarget }) => {
    setInput({
      ...input,
      [currentTarget.name]: currentTarget.value,
    });
  };
  let reset = defaultValues => {
    setInput(defaultValues);
  };

  return [input, reset, handleInputChange];
};

export { useInputChange };
