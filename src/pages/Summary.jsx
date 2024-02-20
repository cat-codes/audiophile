import React from "react";
import "./Summary.scss";
import Button1 from "../components/buttons/Button1";
import CartItem from "../components/CartItem";

const Summary = () => {
  return (
    <div className="summary">
      <p className="summary-title black">Summary</p>
      <section className="summary-items">
        <CartItem />
        <CartItem />
        <CartItem />
      </section>
      <section className="summary-info">
        <p className="summary-info-piece black">
          <section className="label">Total</section>
          <section className="price">$000</section>
        </p>
        <p className="summary-info-piece black">
          <section className="label">Shipping</section>
          <section className="price">$50</section>
        </p>
        <p className="summary-info-piece black">
          <section className="label">VAT (included)</section>
          <section className="price">$000</section>
        </p>
      </section>
      <section className="summary-info-total">
        <p className="summary-info-piece black">
          <section className="label">Grand Total</section>
          <section className="price accent-color">$000</section>
        </p>
      </section>
      <Button1 className="button1" purpose="continue & pay" />
    </div>
  );
};

export default Summary;
