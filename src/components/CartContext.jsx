import React, { useState, useEffect, createContext, useContext } from "react";
import { shop } from "../Database";
import { GetItem } from "./ItemContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { item } = GetItem();
  const [cart, setCart] = useState("");
  let myCart = [];

  // Loads data from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart") || "";
    setCart(storedCart);
  });

  // Updates local storage
  useEffect(() => {
    setCart((newCart) => {
      if (newCart !== cart) {
        localStorage.setItem("cart", newCart);
      }
      return newCart;
    });
  }, [cart]);

  // Updates cart
  const updateCart = (eventId, item) => {
    if (eventId === "add") {
      setCart([
        ...myCart,
        {
          name: item.name,
          price: item.price,
          quantity: item.quantity ? item.quantity++ : 1,
        },
      ]);
    } else if (eventId === "subtract") {
      setCart([
        ...myCart,
        {
          name: item.name,
          price: item.price,
          quantity: item.quantity ? item.quantity-- : 0,
        },
      ]);
    }
    return cart;
  };

  return (
    <CartContext.Provider value={updateCart}>{children}</CartContext.Provider>
  );
};

export const GetCart = () => useContext(CartContext);
