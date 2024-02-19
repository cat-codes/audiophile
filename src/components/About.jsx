import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <img src="/src/assets/homepage/mobile/about-img.jpg" />
      <h2 className="h2-mobile black">
        Bringing you the <span>best</span> audio gear
      </h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};

export default About;
