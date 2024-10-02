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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <button type="button" className="menu-mobile" onClick={() => handleMenu()}>
      <MenuIcon />
      <AnimatePresence>
        {openMenu && (
          <div className="menu-container">
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                className="overlay"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: "anticipate" }}
              />
              {/* Menu content */}
              <motion.section
                key="menuContent"
                className="open-menu nav white"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
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
                  <Link
                    onClick={() => handleClick("/speakers")}
                    to={"/speakers"}
                  >
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
            </>
          </div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Menu;
