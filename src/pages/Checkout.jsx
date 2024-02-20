import React from "react";
import "./Checkout.scss";
import GoBack from "../components/buttons/GoBack";
import Form from "../components/Form";
import Form2 from "./Form2";
import Summary from "./Summary";

const Checkout = () => {
  return (
    <div className="checkout">
      <GoBack />
      <div className="checkout-form">
        <h4>checkout</h4>
        <section className="checkout-form-section">
          <p className="nav accent-color">Billing details</p>
          <Form label="Name" placeholder="Alexei Ward" type="text" />
          <Form
            label="Email address"
            placeholder="alexei@mail.com"
            type="email"
          />
          <Form label="Phone Number" placeholder="+1 202-555-0136" type="tel" />
        </section>
        <section className="checkout-form-section">
          <p className="nav accent-color">Shipping info</p>
          <Form
            label="Your Address"
            placeholder="1137 Williams Avenue"
            type="text"
          />
          <Form label="ZIP Code" placeholder="10001" type="number" />
          <Form label="City" placeholder="New York" type="text" />
          <Form label="Country" placeholder="United States" type="text" />
        </section>
        <section className="checkout-form-section">
          <p className="nav accent-color">Payment details</p>
          <Form2 />
          <Form label="e-Money Number" placeholder="238521993" type="number" />
          <Form label="e-Money PIN" placeholder="6891" type="number" />
        </section>
      </div>
      <Summary />
    </div>
  );
};

export default Checkout;
