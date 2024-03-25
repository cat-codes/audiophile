import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import Button1 from "../components/buttons/Button1";
import Button2 from "../components/buttons/Button2";
import Categories from "../components/Categories";
import About from "../components/About";

const Homepage = () => {
  return (
    <div className="home-container">
      {/* Hero section */}
      <section className="hero">
        <img src="homepage/mobile/hero-img.jpg" />
        <div className="hero-contents">
          <p className="supertitle white">new product</p>
          <h1 className="h1-mobile white">XX99 Mark II Headphones</h1>
          <p className="white">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={"/headphones/xx99-mark-ii-headphones"}>
            <Button1 purpose="see product" />
          </Link>
        </div>
      </section>

      <Categories />

      {/* Advertisement section */}
      <section className="ad">
        {/* Speaker ad */}
        <div className="ad-item-speakerzx9">
          <img
            className="ad-item-img-speakerzx9"
            src="src/assets/homepage/mobile/ad-zx9-speaker.png"
          />
          <h1 className="h1-mobile white">zx9 speaker</h1>
          <p className="white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/speakers/zx9-speaker"}>
            <Button2 id="button2-dark" purpose="see product" />
          </Link>
        </div>

        {/* Speaker 2 ad */}
        <div className="ad-item">
          <img
            className="ad-item-img-speakerzx7"
            src="src/assets/homepage/mobile/ad-zx7-speaker.jpg"
          />
          <div className="ad-item-content-speakerzx7">
            <h4 className="black">zx7 speaker</h4>
            <Link to={"/speakers/zx7-speaker"}>
              <Button2 purpose="see product" />
            </Link>
          </div>
        </div>

        {/* Earphones ad */}
        <div className="ad-item">
          <img
            className="ad-item-img-earphones"
            src="src/assets/homepage/mobile/ad-YX1-earphones.jpg"
          />
          <div className="ad-item-content-earphones">
            <h4 className="black">yx1 earphones</h4>
            <Link to={"/earphones/yx1-earphones"}>
              <Button2 purpose="see product" />
            </Link>
          </div>
        </div>
      </section>

      <About />
    </div>
  );
};

export default Homepage;
