import React from "react";
import "./OrderConfirm.scss";
import { GetCart } from "../components/CartContext";
import Check from "../assets/svg/Check";
import Button1 from "./buttons/Button1";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const OrderConfirm = ({ openConfirm }) => {
  const { cart, setCart, totalPrice, totalQty } = GetCart();

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      width: "85vw",
      height: "60vh",
      y: "-15%",
      borderRadius: "8px",
      transformOrigin: "top right",
    },
    closed: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div className="confirmation-container">
      <AnimatePresence>
        {openConfirm && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0, height: "100vh", width: "100vw" }}
              animate={{
                opacity: 0.4,
                background: "black",
                height: "100vh",
                width: "100vw",
                position: "absolute",
              }}
              exit={{ opacity: 0 }}
            />
            {/* Cart content */}
            <motion.section
              key="cartContent"
              onClick={(event) => event.stopPropagation()}
              className="open-cart nav black"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate="open"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
            >
              <div className="open-confirmation">
                <Check />
                <h3 className="open-confirmation-h h3-mobile">
                  thank you for your order
                </h3>
                <p className="open-confirmation-msg">
                  You will receive an email confirmation shortly.
                </p>

                <section className="open-confirmation-summary">
                  <div className="open-confirmation-summary-top">
                    <div
                      className="open-confirmation-summary-top-item"
                      style={{
                        borderBottom:
                          totalQty - cart[0]?.quantity > 0
                            ? "1px solid rgb(0, 0, 0, 0.08)"
                            : "none",
                      }}
                    >
                      <img
                        src={`item-page/mobile/${cart[0]?.img}/${cart[0]?.img}-0.jpg`}
                      />
                      <div className="open-confirmation-summary-top-item-details">
                        <p className="open-confirmation-summary-top-item-details-name">
                          {cart[0]?.itemName}
                        </p>
                        <p className="price">$ {cart[0]?.price}</p>
                      </div>
                      <div className="qty">x{cart[0]?.quantity}</div>
                    </div>
                    <p
                      className="open-confirmation-summary-top-extra"
                      style={{
                        display:
                          totalQty - cart[0]?.quantity > 0 ? "block" : "none",
                      }}
                    >
                      and {totalQty - cart[0]?.quantity} other item(s)
                    </p>
                  </div>

                  <div className="open-confirmation-summary-total white">
                    <p>Grand total</p>
                    <p className="open-confirmation-summary-total-price">
                      $ {totalPrice}
                    </p>
                  </div>
                </section>
                <Link to={`/home`} className="button">
                  <Button1 purpose="back to home" onClick={setCart([])} />
                </Link>
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderConfirm;
