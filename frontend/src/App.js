import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";

function App() {
  localStorage.setItem('cartCount', '0');
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mycart" element={<MyCart />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
