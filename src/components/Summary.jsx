import React from "react";
import "./Summary.scss";
import { GetCart } from "./CartContext";

const Summary = () => {
  const { cart, totalPrice } = GetCart();

  const shippingPrice = totalPrice > 999 ? 0 : 50;

  return (
    <div className="summary">
      <p className="summary-title black">Summary</p>

      <section className="summary-items">
        <ul className="summary-items-list">
          {cart.map((item, index) => (
            <li key={index}>
              <section className="summary-items-list-left">
                <img
                  className="item-img"
                  src={`/item-page/mobile/${item.img}/${item.img}-0.jpg`}
                />
                <section className="item-info">
                  <p className="item-info-title black">{item.short}</p>
                  <p className="item-info-price black">{item.priceStr}</p>
                </section>
              </section>
              <p className="item-qty">x {item.quantity}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="summary-info">
        <div className="summary-info-piece black">
          <section className="label">Total</section>
          <section className="price">$ {totalPrice}</section>
        </div>
        <div className="summary-info-piece black">
          <section className="label">Shipping</section>
          <section className="price">$ {shippingPrice}</section>
        </div>
        <div className="summary-info-piece black">
          <section className="label">VAT (included)</section>
          <section className="price">$ {totalPrice + shippingPrice}</section>
        </div>
      </section>
      <section className="summary-info-total">
        <p className="summary-info-piece black">
          <section className="label">Grand Total</section>
          <section className="price accent-color">
            $ {totalPrice + shippingPrice}
          </section>
        </p>
      </section>
    </div>
  );
};

export default Summary;
