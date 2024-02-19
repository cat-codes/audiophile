import React from "react";
import "./Categories.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { shop } from "../Database";
import Button3 from "./buttons/Button3";

const Categories = () => {
  const categories = Object.keys(shop.categories);

  const location = useLocation();
  const navigate = useNavigate();

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
      {categories.map((category, index) => (
        <section className="category-item" key={index}>
          <img
            className="category-item-img"
            src={`/src/assets/homepage/mobile/category-${category}.png`}
            alt={category}
          />
          <img
            className="category-item-shadow"
            src="/src/assets/homepage/mobile/category-shadow.png"
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
