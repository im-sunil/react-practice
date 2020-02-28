import { useState } from "react";

let useInputChange = (defaultValues = {}) => {
  let [input, setInput] = useState(defaultValues);

  let handleInputChange = ({ currentTarget }) => {
    let value =
      currentTarget.type == "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    setInput({
      ...input,
      [currentTarget.name]: value,
    });
  };
  let reset = defaultValues => {
    setInput(defaultValues);
  };

  return [input, reset, handleInputChange];
};

export { useInputChange };
