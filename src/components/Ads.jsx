import "./Ads.scss";
import { Link } from "react-router-dom";
import Button2 from "./buttons/Button2";

const Ads = () => {
  return (
    <section className="ad">
      <div className="ad-speakerzx9">
        <picture className="ad-speakerzx9-img">
          {/* Desktop image */}
          <source
            media="(min-width: 1240px)"
            srcSet="src/assets/homepage/desktop/ad-ZX9-speaker.png"
            sizes="100vw" // 100% of the viewport width
          />
          {/* Tablet image */}
          <source
            media="(min-width: 768px)"
            srcSet="src/assets/homepage/tablet/ad-ZX9-speaker.png"
            sizes="100vw"
          />
          {/* Mobile image */}
          <img
            src="src/assets/homepage/mobile/ad-ZX9-speaker.png"
            alt="ZX9 Speaker"
            sizes="100vw"
          />
        </picture>
        <div className="ad-speakerzx9-text">
          <h1 className="h1-mobile white">zx9 speaker</h1>
          <p className="white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/speakers/zx9-speaker"}>
            <Button2 id="button2-dark" purpose="see product" />
          </Link>
        </div>
      </div>

      <div className="ad-speakerzx7">
        <picture className="ad-speakerzx7-img">
          {/* Desktop image */}
          <source
            media="(min-width: 1240px)"
            srcSet="src/assets/homepage/desktop/ad-ZX7-speaker.jpg"
            sizes="100vw"
          />
          {/* Tablet image */}
          <source
            media="(min-width: 768px)"
            srcSet="src/assets/homepage/tablet/ad-ZX7-speaker.jpg"
            sizes="100vw"
          />
          {/* Mobile image */}
          <img
            src="src/assets/homepage/mobile/ad-ZX7-speaker.jpg"
            alt="ZX7 Speaker"
            sizes="100vw"
          />
        </picture>
        <div className="ad-speakerzx7-content">
          <h4 className="black">zx7 speaker</h4>
          <Link to={"/speakers/zx7-speaker"}>
            <Button2 purpose="see product" />
          </Link>
        </div>
      </div>

      <div className="ad-earphones">
        <picture className="ad-earphones-img">
          {/* Desktop image */}
          <source
            media="(min-width: 1240px)"
            srcSet="src/assets/homepage/desktop/ad-YX1-earphones.jpg"
            sizes="100vw" // 100% of the viewport width
          />
          {/* Tablet image */}
          <source
            media="(min-width: 768px)"
            srcSet="src/assets/homepage/tablet/ad-YX1-earphones.jpg"
            sizes="100vw"
          />
          {/* Mobile image */}
          <img
            src="src/assets/homepage/mobile/ad-YX1-earphones.jpg"
            alt="YX1 Earphones"
            sizes="100vw"
          />
        </picture>
        <div className="ad-earphones-content">
          <h4 className="black">yx1 earphones</h4>
          <Link to={"/earphones/yx1-earphones"}>
            <Button2 purpose="see product" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ads;
