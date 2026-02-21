import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/allproduct" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;