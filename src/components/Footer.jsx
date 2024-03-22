import React from "react";
import "./Footer.scss";
import Logo from "../assets/svg/Logo";
import Facebook from "../assets/svg/Facebook";
import Twitter from "../assets/svg/Twitter";
import Instagram from "../assets/svg/Instagram";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handles link navigation
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

  return (
    <section className="footer">
      <div className="footer-border" />
      <Logo />
      <section className="nav white">
        <ul>
          <Link onClick={() => handleClick("/home")} to={"/home"}>
            <li>home</li>
          </Link>
          <Link onClick={() => handleClick("/headphones")} to={"/headphones"}>
            <li>headphones</li>
          </Link>
          <Link onClick={() => handleClick("/speakers")} to={"/speakers"}>
            <li>speakers</li>
          </Link>
          <Link onClick={() => handleClick("/earphones")} to={"/earphones"}>
            <li>earphones</li>
          </Link>
        </ul>
      </section>
      <p className="white">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer-copyright white">
        Copyright 2021. All Rights Reserved
      </p>
      <section className="footer-socmedia">
        <Facebook />
        <Twitter />
        <Instagram />
      </section>
    </section>
  );
};

export default Footer;
