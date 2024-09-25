import "./Header.scss";
import Menu from "./Menu";
import Logo from "../assets/svg/Logo";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Menu />
      <Logo />
      <div className="menu-desktop">
        <ul>
          <Link onClick={() => handleClick("/home")} to={"/home"}>
            home
          </Link>
          <Link onClick={() => handleClick("/headphones")} to={"/headphones"}>
            headphones
          </Link>
          <Link onClick={() => handleClick("/speakers")} to={"/speakers"}>
            speakers
          </Link>
          <Link onClick={() => handleClick("/earphones")} to={"/earphones"}>
            earphones
          </Link>
        </ul>
      </div>
      <Cart />
    </nav>
  );
};

export default Header;
