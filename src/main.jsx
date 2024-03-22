import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/CartContext.jsx";
import { ItemProvider } from "./components/ItemContext.jsx";
import { FormProvider } from "./components/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemProvider>
      <CartProvider>
        <FormProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FormProvider>
      </CartProvider>
    </ItemProvider>
  </React.StrictMode>
);
