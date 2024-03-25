import React from "react";
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
    <section className="category">
      {/* Maps through each category in categories array */}
      {categories.map((category, index) => (
        <section className="category-item" key={index}>
          <img
            className="category-item-img"
            src={`homepage/mobile/category-${category}.png`}
            alt={category}
          />
          <img
            className="category-item-shadow"
            src="homepage/mobile/category-shadow.png"
          />
          <section className="category-item-content">
            <Link
              onClick={() => handleClick(`/${category}`)}
              to={`/${category}`}
            >
              <h6 className="h6-mobile black">{category}</h6>
              <Button3 purpose="shop" />
            </Link>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Categories;
