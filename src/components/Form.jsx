import React, { forwardRef } from "react";
import "./Form.scss";

const Form = forwardRef(
  ({ label, placeholder, type, name, value, onChange, error }, ref) => {
    return (
      <div className="black">
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          id={name}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "error" : ""}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

Form.displayName = "Form";

export default Form;
