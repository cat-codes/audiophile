import React, { createContext, useContext } from "react";
import { shop } from "../Database";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const items = {};

  Object.values(shop.categories).forEach((category) => {
    Object.entries(category).forEach(([itemName, itemInfo]) => {
      items[itemName] = itemInfo;
    });
  });

  return <ItemContext.Provider value={items}>{children}</ItemContext.Provider>;
};

export const GetItem = () => useContext(ItemContext);

/*Object.values(shop.categories): This extracts an array of all the values (in this case, objects) within the categories object of the shop object. It returns an array containing the values of the headphones, speakers, and earphones categories.

.forEach(category => { ... });: This iterates over each category in the array obtained in step 1. The category parameter represents each individual category object during each iteration.

Object.entries(category): This converts each category object into an array of its key-value pairs (entries). This array contains arrays where the first element is the key (item name) and the second element is the value (item info object).

.forEach(([itemName, itemInfo]) => { ... });: This iterates over each key-value pair (entry) in the array obtained in step 3. The destructuring assignment syntax ([itemName, itemInfo]) allows us to directly access the key (item name) and value (item info object) of each entry.

items[itemName] = itemInfo;: Inside this nested forEach loop, it assigns each item's information object (itemInfo) to the items object using the item's name (itemName) as the key. This effectively creates a new property in the items object for each item, where the key is the item's name and the value is its information object.

In summary, this code iterates through each category in the categories object of the shop object, then iterates through each item within each category. For each item, it creates a new property in the items object with the item's name as the key and its information object as the value. This effectively extracts each item with its info into separate objects for easier access throughout the application.*/
