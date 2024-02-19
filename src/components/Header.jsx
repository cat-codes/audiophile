import React from "react";
import "./Header.scss";
import Menu from "../assets/svg/Menu";
import Logo from "../assets/svg/Logo";
import Cart from "../assets/svg/Cart";

const Header = () => {
  return (
    <nav>
      <Menu />
      <Logo />
      <Cart />
    </nav>
  );
};

export default Header;
