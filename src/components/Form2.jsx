import { useState } from "react";
import "./Form2.scss";

const Form2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Handles "Payment Details" option change and updates formData
  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  return (
    <div className="form-2">
      <form className="form-radio">
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
      <form className="form-radio">
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
