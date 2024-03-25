import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartIcon from "../assets/svg/CartIcon";
import { motion, AnimatePresence } from "framer-motion";
import Button1 from "./buttons/Button1";
import { GetCart } from "../components/CartContext";
import RemoveAll from "./buttons/RemoveAll";
import AddSubtract from "./buttons/AddSubtract";

const Cart = ({ openCart, setOpenCart }) => {
  const { cart, setCart } = GetCart();

  // Finds the total amount of each item in the cart
  const cartItemCount = new Set(cart.map((item) => item.itemName)).size;

  // Calculates total price of the cart items
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((accumulator, currentItem) => accumulator + currentItem, 0);

  // Increases the amount of item in the cart
  const handleAdd = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.itemName === item.itemName
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
    console.log("updatedCart: ", cart);
  };

  // Decreases the amount of item in the cart
  const handleSubtract = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.itemName === item.itemName && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
    console.log("updatedCart: ", cart);
  };

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

  const isCartEmpty = cart.length === 0 || totalPrice === 0;

  return (
    <div>
      <CartIcon />
      <div className="cart-container">
        <AnimatePresence>
          {openCart && (
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
                <section className="open-cart-top black">
                  <p className="open-cart-top-title">Cart ({cartItemCount})</p>
                  <RemoveAll />
                </section>

                <ul className="open-cart-items">
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img
                        className="item-img"
                        src={`/item-page/mobile/${item.img}/${item.img}-0.jpg`}
                      />
                      <section className="item-info">
                        <p className="item-info-title black">{item.short}</p>
                        <p className="item-info-price black">{item.priceStr}</p>
                      </section>

                      <AddSubtract
                        quantityToHandle={item.quantity}
                        handleAdd={() => handleAdd(item)}
                        handleSubtract={() => handleSubtract(item)}
                      />
                    </li>
                  ))}
                </ul>
                <section className="open-cart-total">
                  <p className="open-cart-total-text">Total</p>
                  <p className="open-cart-total-price">{`$ ${totalPrice}`}</p>
                </section>
                <div
                  style={{
                    pointerEvents: isCartEmpty ? "none" : "auto",
                    opacity: isCartEmpty ? "0.5" : "1",
                  }}
                >
                  <Link to={`/checkout`}>
                    <Button1
                      purpose="checkout"
                      className="checkoutButton"
                      onClick={() => setOpenCart(false)}
                    />
                  </Link>
                </div>
              </motion.section>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
