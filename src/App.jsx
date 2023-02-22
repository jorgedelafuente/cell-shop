import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import ProductListings from "./views/ProductListings/ProductListings";
Header;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListings />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
