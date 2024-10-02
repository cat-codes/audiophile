import "./Categories.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { shop } from "../Database";
import Button3 from "./buttons/Button3";

// Category navigation components

const Categories = () => {
  //Creates an array of categories from shop object
  const categories = Object.keys(shop.categories);

  const location = useLocation();
  const navigate = useNavigate();

  // Compares the current location with destination loction; if it's the same, page scrolls to the top; if not, it navigates to new page and scrolls to the top there
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
    <section className="categories">
      {/* Maps through each category in categories array */}
      {categories.map((category, index) => (
        <section className="categories-item" key={index}>
          <img
            className="categories-item-img"
            src={`/assets/repeat/category-nav/category-${category}.png`}
            alt={category}
          />
          <section className="categories-item-text">
            <Link
              onClick={() => handleClick(`/${category}`)}
              to={`/${category}`}
            >
              <h6 className="black">{category}</h6>
              <Button3 purpose="shop" />
            </Link>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Categories;
