import React, { useState } from "react";
import "./CategoryPage.scss";
import { useParams, Link } from "react-router-dom";
import { shop } from "../Database";
import Categories from "../components/Categories";
import About from "../components/About";
import Button1 from "../components/buttons/Button1";

const CategoryPage = () => {
  const { category } = useParams();

  const items = Object.keys(shop.categories[category]);

  return (
    <div className="category-page">
      <h4 className="category-page-header">{category}</h4>
      <div className="category-page-content">
        <div className="category-page-content-grid">
          {items.map((item, index) => (
            <section className="category-page-content-grid-item" key={index}>
              <img src={`src/assets/category-page/mobile/${item}.jpg`} />
              {shop.categories[category][item].newProduct && (
                <p className="supertitle accent-color">new product</p>
              )}
              <h2 className="h2-mobile">{item}</h2>
              <p>{shop.categories[category][item].description}</p>
              <Link to={`/${category}/${shop.categories[category][item].img}`}>
                <Button1 purpose={"see product"} />
              </Link>
            </section>
          ))}
        </div>
        <Categories />
        <About />
      </div>
    </div>
  );
};

export default CategoryPage;
