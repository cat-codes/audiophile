import "./Hero.scss";
import { Link } from "react-router-dom";
import Button1 from "./buttons/Button1";

const Hero = () => {
  return (
    <section className="hero">
      <picture>
        {/* Desktop image */}
        <source
          media="(min-width: 1240px)"
          srcSet="/src/assets/homepage/desktop/hero-img.jpg"
          sizes="100vw" // 100% of the viewport width
        />
        {/* Tablet image */}
        <source
          media="(min-width: 768px)"
          srcSet="src/assets/homepage/tablet/hero-img.jpg"
          sizes="100vw"
        />
        {/* Mobile image */}
        <img
          src="src/assets/homepage/mobile/hero-img.jpg"
          alt="XX99 Mark II Headphones"
          sizes="100vw"
        />
      </picture>
      <div className="hero-contents">
        <p className="supertitle white">new product</p>
        <h1 className="white">XX99 Mark II Headphones</h1>
        <p className="description white">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to={"/headphones/xx99-mark-ii-headphones"}>
          <Button1 purpose="see product" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
