import { useState, useEffect } from "react";
import "./Menu.scss";
import MenuIcon from "../assets/svg/MenuIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
    console.log("Menu open?", !openMenu);
  };

  const handleClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate(path);
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <button type="button" className="menu-mobile" onClick={() => handleMenu()}>
      <MenuIcon />
      <div className="menu-container">
        <AnimatePresence>
          {openMenu && (
            <motion.section
              key="menuContent"
              className="open-menu nav white"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{ scale: 0 }}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
            >
              <ul>
                <Link onClick={() => handleClick("/home")} to={"/home"}>
                  home
                </Link>
                <Link
                  onClick={() => handleClick("/headphones")}
                  to={"/headphones"}
                >
                  headphones
                </Link>
                <Link onClick={() => handleClick("/speakers")} to={"/speakers"}>
                  speakers
                </Link>
                <Link
                  onClick={() => handleClick("/earphones")}
                  to={"/earphones"}
                >
                  earphones
                </Link>
              </ul>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default Menu;
