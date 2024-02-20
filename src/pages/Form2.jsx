import React from "react";
import "./Form2.scss";

const Form2 = () => {
  return (
    <div className="form-2">
      <form className="form-radio">
        <input type="radio" id="e-Money"></input>
        <label htmlFor="e-Money">e-Money</label>
      </form>
      <form className="form-radio">
        <input type="radio" id="Cash on Delivery"></input>
        <label htmlFor="Cash on Delivery">Cash on Delivery</label>
      </form>
    </div>
  );
};

export default Form2;
