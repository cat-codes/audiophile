import { useState, useEffect, useRef } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import CartIcon from "../assets/svg/CartIcon";
import { motion, AnimatePresence } from "framer-motion";
import Button1 from "./buttons/Button1";
import { GetCart } from "../components/CartContext";
import RemoveAll from "./buttons/RemoveAll";
import AddSubtract from "./buttons/AddSubtract";

const Cart = () => {
  const { cart, setCart, totalQty } = GetCart();
  const [openCart, setOpenCart] = useState(false);
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  // Reference to the cart menu
  const cartRef = useRef(null);

  // Close the cart when clicking outside of the cart element
  useEffect(() => {
    function handleClickOutside(event) {
      // If the cart is open and the click is outside the cart, close the cart
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    }

    if (openCart) {
      // Add event listener to detect clicks outside
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the cart is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCart]);

  // Toggles cart menu
  const handleCart = () => {
    setOpenCart((prevOpenCart) => !prevOpenCart);
    console.log("Cart open?", !openCart);
  };

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

  // Close cart when checkout button is clicked
  useEffect(() => {
    if (checkoutClicked) {
      setOpenCart(false);
      setCheckoutClicked(false);
    }
  }, [checkoutClicked]);

  const isCartEmpty = cart.length === 0 || totalPrice === 0;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const cartVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <button type="button" className="cart-button" onClick={() => handleCart()}>
      <div className="count">{totalQty}</div>
      <CartIcon />
      <AnimatePresence>
        {openCart && (
          <div className="cart-container">
            <>
              {/* Overlay */}
              <motion.div
                ref={cartRef}
                key="overlay"
                className="overlay"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "anticipate" }}
              />
              {/* Cart content */}
              <motion.section
                key="cartContent"
                className="open-cart nav black"
                variants={cartVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "anticipate" }}
              >
                <section className="open-cart-top black">
                  <p className="open-cart-top-title">Cart ({cartItemCount})</p>
                  <RemoveAll />
                </section>

                <ul className="open-cart-items">
                  {cart.map((item, index) => (
                    <li key={index}>
                      <div className="item-left">
                        <img
                          className="item-left-img"
                          src={`/src/assets/item-page/mobile/${item.img}/${item.img}-preview.jpg`}
                        />
                        <section className="item-left-info">
                          <p className="item-left-info-title black">
                            {item.short}
                          </p>
                          <p className="item-left-info-price black">
                            {item.priceStr}
                          </p>
                        </section>
                      </div>

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
                  className="open-cart-button"
                  style={{
                    pointerEvents: isCartEmpty ? "none" : "auto",
                    opacity: isCartEmpty ? "0.5" : "1",
                  }}
                >
                  <Link to={`/checkout`}>
                    <Button1
                      purpose="checkout"
                      onClick={() => setCheckoutClicked(true)}
                    />
                  </Link>
                </div>
              </motion.section>
            </>
          </div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Cart;
