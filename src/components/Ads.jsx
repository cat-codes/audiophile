import "./Ads.scss";
import { Link } from "react-router-dom";
import Button2 from "./buttons/Button2";

const Ads = () => {
  return (
    <section className="ad">
      <div className="ad-item-speakerzx9">
        <img
          className="ad-item-img-speakerzx9"
          src="/src/assets/homepage/mobile/ad-ZX9-speaker.png"
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

      <div className="ad-item">
        <img
          className="ad-item-img-speakerzx7"
          src="/src/assets/homepage/mobile/ad-ZX7-speaker.jpg"
        />
        <div className="ad-item-content-speakerzx7">
          <h4 className="black">zx7 speaker</h4>
          <Link to={"/speakers/zx7-speaker"}>
            <Button2 purpose="see product" />
          </Link>
        </div>
      </div>

      <div className="ad-item">
        <img
          className="ad-item-img-earphones"
          src="/src/assets/homepage/mobile/ad-YX1-earphones.jpg"
        />
        <div className="ad-item-content-earphones">
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
