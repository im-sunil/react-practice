import React, { useRef } from "react";

import { useInputChange } from "../hooks/useInputChange";

import "./Form.css";

let initialFormData = {
  firstName: "",
  lastName: "",
  bio: "",
  transport: "",
};
let Form = () => {
  let [formData, resetFormData, handleInputChange] = useInputChange(
    initialFormData
  );
  let form = useRef();

  let { firstName, lastName, bio, transport } = formData;

  let handleSubmit = e => {
    e.preventDefault(); /*let formData = new FormData(form.current);   formData.get("firstName");*/
    console.log(formData);
    resetFormData(initialFormData);
  };
  return (
    <div>
      <div>
        <pre>{JSON.stringify(formData, null, 4)}</pre>
      </div>

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

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
