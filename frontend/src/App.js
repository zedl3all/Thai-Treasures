import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductList from "./pages/ProductList";

function App() {
  localStorage.setItem('cartCount', '0');
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="/allproduct" element={<ProductList />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
