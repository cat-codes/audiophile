import React from "react";
import "./Menu.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "../assets/svg/MenuIcon";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ openMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
      });
    }
  };

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      width: 1000,
      height: 1000,
      x: 0,
      top: -300,
      borderRadius: "100%",
      transformOrigin: "top left",
    },
    closed: {
      scale: 1,
      opacity: 0,
      x: 0,
      borderRadius: "50%",
      transformOrigin: "top left",
    },
    exit: {
      scale: 0,
      borderRadius: "50%",
    },
  };

  return (
    <div>
      <MenuIcon />
      <div className="menu-container">
        <AnimatePresence>
          {openMenu && (
            <motion.section
              className="open-menu nav white"
              initial={{
                scale: 0,
                opacity: 0,
                x: -100,
                borderRadius: "50%",
                transformOrigin: "top left",
              }}
              animate="open"
              variants={variants}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              exit={{ scale: 0 }}
            >
              <ul>
                <Link onClick={() => handleClick("/home")} to={"/home"}>
                  <motion.li
                    transition={{
                      duration: 0.5,
                      ease: "anticipate",
                      delay: 1.5,
                    }}
                  >
                    home
                  </motion.li>
                </Link>
                <Link
                  onClick={() => handleClick("/headphones")}
                  to={"/headphones"}
                >
                  <motion.li
                    animate={openMenu ? "open" : "closed"}
                    transition={{
                      duration: 0.5,
                      ease: "anticipate",
                      delay: 1.5,
                    }}
                  >
                    headphones
                  </motion.li>
                </Link>
                <Link onClick={() => handleClick("/speakers")} to={"/speakers"}>
                  <motion.li
                    transition={{
                      duration: 0.5,
                      ease: "anticipate",
                      delay: 1.5,
                    }}
                  >
                    speakers
                  </motion.li>
                </Link>
                <Link
                  onClick={() => handleClick("/earphones")}
                  to={"/earphones"}
                >
                  <motion.li
                    transition={{
                      duration: 0.5,
                      ease: "anticipate",
                      delay: 1.5,
                    }}
                    exit={{ scale: 0 }}
                  >
                    earphones
                  </motion.li>
                </Link>
              </ul>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
