import React, { useState, useEffect } from "react";
import "./ItemPage.scss";
import { useParams } from "react-router-dom";
import { shop } from "../Database";
import Categories from "../components/Categories";
import About from "../components/About";
import Button1 from "../components/buttons/Button1";
import GoBack from "../components/buttons/GoBack";
import { GetCart } from "../components/CartContext";

const ItemPage = () => {
  const { itemImg } = useParams();
  // console.log("itemImg: ", itemImg);
  const { cart, updateCart } = GetCart();
  const [quantityToAdd, setQuantityToAdd] = useState(1);

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

  const handleQuantityToAdd = () => {
    setQuantityToAdd(quantityToAdd + 1);
  };

  const handleQuantityToSubtract = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updateCartProduct = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: quantityToAdd } : item
      );
      updateCart(updateCartProduct);
    } else {
      updateCart([...cart, { ...currentItem, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log("Updated cart: ", cart);
  }, [cart]);

  return (
    <div className="item-page">
      <section>
        <GoBack />
        <img
          src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-0.jpg`}
        />
        {currentItem.newProduct && (
          <p className="supertitle accent-color">new product</p>
        )}
        <h4>{currentItem.itemName}</h4>
        <p className="black">{currentItem.description}</p>
        <p className="price">{currentItem.price}</p>
        <section className="buttons">
          <div className="add-subtract">
            <button onClick={handleQuantityToSubtract}>-</button>
            <p type="button" className="black">
              {quantityToAdd}
            </p>
            <button onClick={handleQuantityToAdd}>+</button>
          </div>
          <Button1
            purpose={"add to cart"}
            onClick={() => handleAddToCart(currentItem)}
          />
        </section>
      </section>
      <section>
        <h4>features</h4>
        <p>{currentItem.features}</p>
      </section>
      <section>
        <h4>in the box</h4>
        <ul>
          {currentItem.contents.map((content, index) => (
            <li key={index}>
              <p className="accent-color contentQty">{content.qty}</p>
              <p>{content.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <img
          src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-1.jpg`}
        />
        <img
          src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-2.jpg`}
        />
        <img
          src={`/src/assets/item-page/mobile/${currentItem.img}/${currentItem.img}-3.jpg`}
        />
      </section>
      <Categories />
      <About />
    </div>
  );
};

export default ItemPage;
