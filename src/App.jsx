import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./views/ProductDetails/ProductDetails";
import ProductListings from "./views/ProductListings/ProductListings";
import { Header } from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <body>
        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
