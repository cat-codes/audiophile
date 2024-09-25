import "./Homepage.scss";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import Ads from "../components/Ads";

const Homepage = () => {
  return (
    <div className="container">
      <Hero />
      <div className="page">
        <div className="contents">
          <Categories />
          <Ads />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
