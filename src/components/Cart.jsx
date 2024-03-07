import React from "react";
import "./Cart";
import CartIcon from "../assets/svg/CartIcon";
import { motion, AnimatePresence } from "framer-motion";
import Button1 from "./buttons/Button1";

const Cart = ({ openCart }) => {
  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      transformOrigin: "top right",
    },
    closed: {
      scale: 0,
      opacity: 0,
      transformOrigin: "top right",
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
              initial={{ scale: 0, opacity: 0 }}
              animate="open"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <section>
                <p>Cart (3)</p>
              </section>
              <Button1 purpose="back to home" />
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
