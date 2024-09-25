import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:itemImg" element={<ItemPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
