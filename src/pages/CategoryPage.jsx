import "./CategoryPage.scss";
import { useParams, Link } from "react-router-dom";
import { shop } from "../Database";
import Categories from "../components/Categories";
import About from "../components/About";
import Button1 from "../components/buttons/Button1";
import GoBack from "../components/buttons/GoBack";
// import { GetItem } from "../components/ItemContext";

const CategoryPage = () => {
  // const { items } = GetItem();

  // Refers to "category" in Route path in App.js
  const { category } = useParams();

  // Extracts items from each category in shop object
  const categoryItems = Object.keys(shop.categories[category]);
  console.log("categoryItems: ", categoryItems);

  return (
    <div className="category-page">
      <h4 className="category-page-header">{category}</h4>
      <div className="go-back-btn">
        <GoBack />
      </div>
      <div className="category-page-content">
        <div className="category-page-content-grid">
          {/* Maps thorugh each item in items array and displays each item of the particular category on the page*/}
          {categoryItems.map((item, index) => (
            <section className="category-page-content-grid-item" key={index}>
              <img
                src={`src/assets/item-page/mobile/${shop.categories[category][item].img}/${shop.categories[category][item].img}-preview.jpg`}
              />
              {/* Checks if it's a new product and adds a supertitle accordingly */}
              {shop.categories[category][item].newProduct && (
                <p className="supertitle accent-color">new product</p>
              )}
              {/* Item's title */}
              <h2 className="h2-mobile">{item}</h2>
              {/* Item's description */}
              <p>{shop.categories[category][item].description}</p>
              {/* Links to the item's page; "img" refers to the item's image name in assets */}
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
