import React, { useState, useEffect } from "react";
import "./Form.scss";
import { useFormContext } from "./FormContext";

const Form = ({ label, placeholder, type, isSubmitted }) => {
  const { formData, handleChange, handleSubmit } = useFormContext();
  const [isFilledForm, setIsFilledForm] = useState(true);

  // Forms are set to "filled" upon mounting to not indicate error
  useEffect(() => {
    setIsFilledForm(true);
  }, []);

  // Tracks and updates form state depending on whether it's filled or not
  useEffect(() => {
    const state = formData[label] === "" ? false : true;
    setIsFilledForm(state);
  }, [formData, isSubmitted]);

  // Refers to handleSubmit function defined in FormContext.jsx
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <form className="black" onSubmit={handleFormSubmit}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        value={formData[label] || ""}
        onChange={handleChange}
        style={{
          borderColor: isSubmitted && !isFilledForm ? "red" : "#cfcfcf",
        }}
      />
    </form>
  );
};

export default Form;
