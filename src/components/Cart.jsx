import React from "react";
import "./Cart.scss";
import CartIcon from "../assets/svg/CartIcon";
import { motion, AnimatePresence } from "framer-motion";
import { GetItem } from "./ItemContext";
import { GetCart } from "./CartContext";

const Cart = ({ openCart }) => {
  const { items } = GetItem();
  const { updateCart } = GetCart();

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      width: "80vw",
      height: "50em",
      x: 0,
      borderRadius: 8,
      transformOrigin: "top right",
    },
    closed: {
      scale: 1,
      opacity: 0,
      x: 0,
      borderRadius: 8,
      transformOrigin: "top right",
    },
    exit: {
      scale: 0,
      borderRadius: 8,
    },
  };
  return (
    <div>
      <CartIcon />
      <div className="cart-container">
        <AnimatePresence>
          {openCart && (
            <motion.section
              className="open-cart nav black"
              initial={{
                scale: 0,
                opacity: 0,
                borderRadius: 8,
                transformOrigin: "top right",
              }}
              animate="open"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              exit={{ scale: 0 }}
            >
              <h6>thank you for your order</h6>
              <p>You will receive an email confirmation shortly.</p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
