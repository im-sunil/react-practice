import React, { useRef } from "react";

import { useInputChange } from "../hooks/useInputChange";

import "./Form.css";

let initialFormData = {
  firstName: "",
  lastName: "",
  bio: "",
  transport: "",
  agree: false,
  breakfast: false,
  launch: false,
  dinner: false,
  shirtSize: "",
};
let Form = () => {
  let [formData, resetFormData, handleInputChange] = useInputChange(
    initialFormData
  );
  let form = useRef();

  let {
    firstName,
    lastName,
    bio,
    transport,
    agree,
    breakfast,
    launch,
    dinner,
    shirtSize,
  } = formData;

  let handleSubmit = e => {
    e.preventDefault(); /*let formData = new FormData(form.current);   formData.get("firstName");*/
    console.log(formData);
    resetFormData(initialFormData);
  };
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit} ref={form}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="bio"> Bio</label>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="3"
          value={bio}
          onChange={handleInputChange}
        ></textarea>

        <select
          name="transport"
          id="transport"
          value={transport}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        >
          <option value="">Pls select</option>
          <option value="plane">Plane</option>
          <option value="trains">Trains</option>
          <option value="cars">Cars</option>
          <option value="boats">Boats</option>
        </select>
        <fieldset>
          <legend>Select you meals</legend>
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            onChange={handleInputChange}
            checked={breakfast}
          />
          <label htmlFor="breakfast">Breakfast</label>

          <input
            type="checkbox"
            id="launch"
            name="launch"
            onChange={handleInputChange}
            checked={launch}
          />
          <label htmlFor="launch">Launch</label>

          <input
            type="checkbox"
            id="dinner"
            name="dinner"
            onChange={handleInputChange}
            checked={dinner}
          />
          <label htmlFor="dinner"> Dinner</label>
        </fieldset>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={handleInputChange}
            checked={agree}
          />
          Agree teams and condtions
        </label>

        {/**/}
        <fieldset>
          <legend>T-Shirt sizes</legend>
          <label htmlFor="sizeL">
            <input
              type="radio"
              id="sizeL"
              name="shirtSize"
              value="l"
              onChange={handleInputChange}
              checked={shirtSize == "l"}
            />
            Large
          </label>

          <label htmlFor="sizeM">
            <input
              type="radio"
              id="sizeM"
              name="shirtSize"
              value="m"
              onChange={handleInputChange}
              checked={shirtSize == "m"}
            />
            Medium
          </label>

          <label htmlFor="sizeS">
            <input
              type="radio"
              id="sizeS"
              name="shirtSize"
              value="s"
              onChange={handleInputChange}
              checked={shirtSize == "s"}
            />
            Small
          </label>
        </fieldset>

        <button type="submit">Save</button>
      </form>
      <div>
        <pre>{JSON.stringify(formData, null, 4)}</pre>
      </div>
    </div>
  );
};

export default Form;
