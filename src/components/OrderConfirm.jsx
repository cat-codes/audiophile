import React from "react";
import "./OrderConfirm.scss";
import { GetItem } from "./ItemContext";
import { GetCart } from "./CartContext";
import Check from "../assets/svg/Check";
import Button1 from "./buttons/Button1";

const OrderConfirm = () => {
  const { items } = GetItem();
  const { updateCart } = GetCart();

  return (
    <div className="confirmation">
      <Check />
      <h6>thank you for your order</h6>
      <p className="confirmation-text">
        You will receive an email confirmation shortly.
      </p>
      <section className="confirmation-summary">
        <div className="confirmation-summary-item">
          <div className="confirmation-summary-item">
            <div className="confirmation-summary-item-first">
              <div className="confirmation-summary-item-first-pic">Pic 1</div>
            </div>
          </div>
          <p className="confirmation-summary-others confirmation-text">
            and 2 other item(s)
          </p>
          <div className="confirmation-summary-total white">
            <p>Grand total</p>
            <p className="price">000</p>
          </div>
        </div>
      </section>
      <Button1 purpose="back to home" />
    </div>
  );
};

export default OrderConfirm;
