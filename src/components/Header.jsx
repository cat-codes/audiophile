import "./Header.scss";
import Menu from "./Menu";
import Logo from "../assets/svg/Logo";
import Cart from "./Cart";

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
