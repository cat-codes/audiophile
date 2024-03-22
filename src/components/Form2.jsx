import React, { useState, useEffect } from "react";
import "./Form2.scss";
import { useFormContext } from "../components/FormContext";

const Form2 = ({ isSubmitted }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { setFormData } = useFormContext();

  // Handles "Payment Details" option change and updates formData
  const handleOptionChange = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      "Payment Details": value,
    }));
    setSelectedOption(value);
  };

  return (
    <div className="form-2">
      <form
        className="form-radio"
        style={{
          "border-color": isSubmitted && !selectedOption ? "red" : "#cfcfcf",
        }}
      >
        <input
          type="radio"
          id="e-Money"
          name="paymentOption"
          value="e-Money"
          checked={selectedOption === "e-Money"}
          onChange={handleOptionChange}
        ></input>
        <label htmlFor="e-Money">e-Money</label>
      </form>
      <form
        className="form-radio"
        style={{
          "border-color": isSubmitted && !selectedOption ? "red" : "#cfcfcf",
        }}
      >
        <input
          type="radio"
          id="Cash on Delivery"
          name="paymentOption"
          value="Cash on Delivery"
          checked={selectedOption === "Cash on Delivery"}
          onChange={handleOptionChange}
        ></input>
        <label htmlFor="Cash on Delivery">Cash on Delivery</label>
      </form>
    </div>
  );
};

export default Form2;
