import { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Loads data from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Updates local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calculates total price of all items in the cart
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((accumulator, currentItem) => accumulator + currentItem, 0);

  // Calculates total quantity of all items in the cart
  const totalQty = cart
    .map((item) => item.quantity)
    .reduce((accumulator, currentItem) => accumulator + currentItem, 0);

  // Function to update cart
  const updateCart = (newCart) => {
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, updateCart, totalPrice, totalQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const GetCart = () => useContext(CartContext);
