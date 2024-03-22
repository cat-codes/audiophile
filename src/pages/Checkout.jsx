import React, { useState } from "react";
import "./Checkout.scss";
import GoBack from "../components/buttons/GoBack";
import Form from "../components/Form";
import Form2 from "../components/Form2";
import Summary from "../components/Summary";
import Button1 from "../components/buttons/Button1";
import { useFormContext } from "../components/FormContext";
import OrderConfirm from "../components/OrderConfirm";

const Checkout = () => {
  const { formData, openConfirm, handleSubmit, isSubmitted } = useFormContext();

  console.log("formData: ", formData);

  return (
    <div className="checkout">
      <GoBack />

      <div className="checkout-form">
        <h4>checkout</h4>

        <section className="checkout-form-section">
          <p className="nav accent-color">Billing details</p>
          <Form
            label="Name"
            placeholder="Alexei Ward"
            type="text"
            isSubmitted={isSubmitted}
          />
          <Form
            label="Email address"
            placeholder="alexei@mail.com"
            type="email"
            isSubmitted={isSubmitted}
          />
          <Form
            label="Phone Number"
            placeholder="+1 202-555-0136"
            type="tel"
            isSubmitted={isSubmitted}
          />
        </section>

        <section className="checkout-form-section">
          <p className="nav accent-color">Shipping info</p>
          <Form
            label="Your Address"
            placeholder="1137 Williams Avenue"
            type="text"
            isSubmitted={isSubmitted}
          />
          <Form
            label="ZIP Code"
            placeholder="10001"
            type="number"
            isSubmitted={isSubmitted}
          />
          <Form
            label="City"
            placeholder="New York"
            type="text"
            isSubmitted={isSubmitted}
          />
          <Form
            label="Country"
            placeholder="United States"
            type="text"
            isSubmitted={isSubmitted}
          />
        </section>

        <section className="checkout-form-section">
          <p className="nav accent-color">Payment details</p>
          <Form2 formData={formData} isSubmitted={isSubmitted} />
          <Form
            label="e-Money Number"
            placeholder="238521993"
            type="number"
            isSubmitted={isSubmitted}
          />
          <Form
            label="e-Money PIN"
            placeholder="6891"
            type="number"
            isSubmitted={isSubmitted}
          />
        </section>
      </div>

      <Summary />

      <Button1 purpose="continue & pay" onClick={handleSubmit} />
      <OrderConfirm openConfirm={openConfirm} />
    </div>
  );
};

export default Checkout;
