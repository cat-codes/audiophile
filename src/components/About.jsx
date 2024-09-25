import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <picture className="about">
        {/* Desktop image */}
        <source
          media="(min-width: 1240px)"
          srcSet="/src/assets/repeat/about/desktop/about.jpg"
          sizes="100vw" // 100% of the viewport width
        />
        {/* Tablet image */}
        <source
          media="(min-width: 768px)"
          srcSet="/src/assets/repeat/about/tablet/about.jpg"
          sizes="100vw"
        />
        {/* Mobile image */}
        <img
          src="/src/assets/repeat/about/mobile/about.jpg"
          alt="About"
          sizes="100vw"
        />
      </picture>
      <div className="about-text">
        <h2 className="h2 black">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
