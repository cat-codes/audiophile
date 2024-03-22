import React from "react";
import "./RemoveAll.scss";
import { GetCart } from "../CartContext";

const RemoveAll = () => {
  const { cart, updateCart } = GetCart();

  const handleRemoveAll = () => {
    updateCart([]);
  };

  return (
    <button className="remove-all" onClick={() => handleRemoveAll()}>
      Remove all
    </button>
  );
};

export default RemoveAll;
