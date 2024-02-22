import React, { useState } from "react";
import "./Header.scss";
import Menu from "./Menu";
import Logo from "../assets/svg/Logo";
import Cart from "./Cart";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
    console.log("Menu open?", openMenu);
  };

  const handleCart = () => {
    setOpenCart((prevOpenCart) => !prevOpenCart);
    console.log("Cart open?", openCart);
  };

  return (
    <nav>
      <button type="button" onClick={() => handleMenu()}>
        <Menu openMenu={openMenu} />
      </button>
      <Logo />
      <button type="button" onClick={() => handleCart()}>
        <Cart openCart={openCart} />
      </button>
    </nav>
  );
};

export default Header;
