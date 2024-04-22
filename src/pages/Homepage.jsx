import "./Homepage.scss";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import Ads from "../components/Ads";

const Homepage = () => {
  return (
    <div className="home-container">
      <Hero />
      <Categories />
      <Ads />
      <About />
    </div>
  );
};

export default Homepage;
