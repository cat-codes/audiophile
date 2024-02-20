import React from "react";
import "./Form.scss";

const Form = ({ label, placeholder, type }) => {
  return (
    <form className="black">
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </form>
  );
};

export default Form;
