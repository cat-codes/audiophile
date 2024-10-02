import "./CategoryPage.scss";
import { useParams, Link } from "react-router-dom";
import { shop } from "../Database";
import Categories from "../components/Categories";
import About from "../components/About";
import Button1 from "../components/buttons/Button1";
import GoBack from "../components/buttons/GoBack";

const CategoryPage = () => {
  // Refers to "category" in Route path in App.js
  const { category } = useParams();

  // Extracts items from each category in shop object
  const categoryItems = Object.keys(shop.categories[category]);
  console.log("categoryItems: ", categoryItems);

  return (
    <div className="container">
      <h4 className="header">{category}</h4>
      <div className="page">
        <GoBack />
        <div className="category">
          {/* Maps thorugh each item in items array and displays each item of the particular category on the page*/}
          {categoryItems.map((item, index) => (
            <section
              className={`category-item ${
                index % 2 !== 0 ? "category-item-reverse" : ""
              }`}
              key={index}
            >
              <picture>
                {/* Desktop image */}
                <source
                  media="(min-width: 1240px)"
                  srcSet={`/assets/category-page/desktop/${shop.categories[category][item].img}.jpg`}
                  sizes="100vw" // 100% of the viewport width
                />
                {/* Tablet image */}
                <source
                  media="(min-width: 768px)"
                  srcSet={`/assets/category-page/tablet/${shop.categories[category][item].img}.jpg`}
                  sizes="100vw"
                />
                {/* Mobile image */}
                <img
                  src={`/assets/category-page/mobile/${shop.categories[category][item].img}.jpg`}
                  alt="Category Photo"
                  sizes="100vw"
                />
              </picture>
              <div className="category-item-text">
                {/* Checks if it's a new product and adds a supertitle accordingly */}
                {shop.categories[category][item].newProduct && (
                  <p className="supertitle accent-color">new product</p>
                )}
                {/* Item's title */}
                <h2 className="h2">{item}</h2>
                {/* Item's description */}
                <p>{shop.categories[category][item].description}</p>
                {/* Links to the item's page; "img" refers to the item's image name in assets */}
                <Link
                  to={`/${category}/${shop.categories[category][item].img}`}
                >
                  <Button1 purpose={"see product"} />
                </Link>
              </div>
            </section>
          ))}
          <Categories />
          <About />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
