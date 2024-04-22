import "./Hero.scss";
import { Link } from "react-router-dom";
import Button1 from "./buttons/Button1";

const Hero = () => {
  return (
    <section className="hero">
      <img src="src/assets/homepage/mobile/hero-img.jpg" />
      <div className="hero-contents">
        <p className="supertitle white">new product</p>
        <h1 className="h1-mobile white">XX99 Mark II Headphones</h1>
        <p className="white">
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
