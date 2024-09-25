import { useState } from "react";
import "./ItemPage.scss";
import { useParams } from "react-router-dom";
import { shop } from "../Database";
import Categories from "../components/Categories";
import About from "../components/About";
import Button1 from "../components/buttons/Button1";
import GoBack from "../components/buttons/GoBack";
import { GetCart } from "../components/CartContext";
import AddSubtract from "../components/buttons/AddSubtract";

const ItemPage = () => {
  // Refers to "itemImg" in Route path in App.js
  const { itemImg } = useParams();
  const { cart, setCart } = GetCart();
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  console.log("cart: ", cart);

  // Extracts information about the item into a currentItem object
  function extractItemInfo(itemImg) {
    if (!shop.categories) {
      return null;
    }
    for (const category in shop.categories) {
      if (shop.categories.hasOwnProperty(category)) {
        for (const itemName in shop.categories[category]) {
          if (shop.categories[category].hasOwnProperty(itemName)) {
            const currentItem = shop.categories[category][itemName];
            if (currentItem.img === itemImg) {
              return { category, itemName, ...currentItem };
            }
          }
        }
      }
    }
    return null;
  }

  const currentItem = extractItemInfo(itemImg);
  console.log("currentItem: ", currentItem);

  // Tracks the quantity of the item to add to the cart
  const handleQuantityToAdd = () => {
    setQuantityToAdd(quantityToAdd + 1);
  };

  const handleQuantityToSubtract = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  console.log("quantityToAdd: ", quantityToAdd);

  // Adds item to the cart or updates its quantity if it already exists in the cart
  const handleAddToCart = (currentItem) => {
    console.log("Entering handleAddToCart function.");

    // Check if currentItem is not null
    if (!currentItem) {
      console.log("Item is null");
      return;
    }

    // Checks if the item already exists in the cart
    const existingItem = cart.find(
      (cartItem) => cartItem.itemName === currentItem.itemName
    );

    // Calculates the new quantity to add
    const newQuantity = existingItem
      ? existingItem.quantity + quantityToAdd
      : quantityToAdd;

    // Updates the cart
    const updatedCart = existingItem
      ? cart.map((cartItem) =>
          cartItem.itemName === currentItem.itemName
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      : [...cart, { ...currentItem, quantity: quantityToAdd }];

    setCart(updatedCart);
  };

  console.log("updatedCart: ", cart);

  return (
    <div className="container">
      <div className="page">
        <GoBack />
        <div className="itempage">
          <section className="itempage-top">
            <picture>
              {/* Desktop image */}
              <source
                media="(min-width: 1240px)"
                srcSet={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-0.jpg`}
                sizes="100vw" // 100% of the viewport width
              />
              {/* Tablet image */}
              <source
                media="(min-width: 768px)"
                srcSet={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-0.jpg`}
                sizes="100vw"
              />
              {/* Mobile image */}
              <img
                src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-0.jpg`}
                alt="Item Photo"
                sizes="100vw"
              />
            </picture>
            <div className="itempage-top-text">
              {currentItem.newProduct && (
                <p className="supertitle accent-color">new product</p>
              )}
              <h4>{currentItem.itemName}</h4>
              <p className="black">{currentItem.description}</p>
              <p className="price">{currentItem.priceStr}</p>

              <section className="buttons">
                <AddSubtract
                  quantityToHandle={quantityToAdd}
                  handleAdd={handleQuantityToAdd}
                  handleSubtract={handleQuantityToSubtract}
                />

                <Button1
                  purpose={"add to cart"}
                  onClick={() => handleAddToCart(currentItem)}
                  aria-label="Add to cart"
                />
              </section>
            </div>
          </section>

          <div className="itempage-middle">
            <div className="itempage-middle-features">
              <h3>features</h3>
              <p>{currentItem.features}</p>
            </div>
            <div className="itempage-middle-inthebox">
              <h3>in the box</h3>
              <ul>
                {currentItem.contents.map((content, index) => (
                  <li key={index}>
                    <p className="accent-color contentQty">{content.qty}</p>
                    <p>{content.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="itempage-bottom">
            <div className="itempage-bottom-group">
              <picture>
                {/* Desktop image */}
                <source
                  media="(min-width: 1240px)"
                  srcSet={`/src/assets/item-page/desktop/${currentItem.img}/${currentItem.img}-1.jpg`}
                  sizes="100vw" // 100% of the viewport width
                />
                {/* Tablet image */}
                <source
                  media="(min-width: 768px)"
                  srcSet={`/src/assets/item-page/tablet/${currentItem.img}/${currentItem.img}-1.jpg`}
                  sizes="100vw"
                />
                {/* Mobile image */}
                <img
                  src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-1.jpg`}
                  alt="Item Photo"
                  sizes="100vw"
                />
              </picture>

              <picture>
                {/* Desktop image */}
                <source
                  media="(min-width: 1240px)"
                  srcSet={`/src/assets/item-page/desktop/${currentItem.img}/${currentItem.img}-2.jpg`}
                  sizes="100vw" // 100% of the viewport width
                />
                {/* Tablet image */}
                <source
                  media="(min-width: 768px)"
                  srcSet={`/src/assets/item-page/tablet/${currentItem.img}/${currentItem.img}-2.jpg`}
                  sizes="100vw"
                />
                {/* Mobile image */}
                <img
                  src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-2.jpg`}
                  alt="Item Photo"
                  sizes="100vw"
                />
              </picture>
            </div>
            <picture>
              {/* Desktop image */}
              <source
                media="(min-width: 1240px)"
                srcSet={`/src/assets/item-page/desktop/${currentItem.img}/${currentItem.img}-3.jpg`}
                sizes="100vw" // 100% of the viewport width
              />
              {/* Tablet image */}
              <source
                media="(min-width: 768px)"
                srcSet={`/src/assets/item-page/tablet/${currentItem.img}/${currentItem.img}-3.jpg`}
                sizes="100vw"
              />
              {/* Mobile image */}
              <img
                src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-3.jpg`}
                alt="Item Photo"
                sizes="100vw"
              />
            </picture>
          </section>
          <Categories />
          <About />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
