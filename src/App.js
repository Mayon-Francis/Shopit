import Home from "pages/Home";
import Product from "pages/Product";
import ShopApp from "pages/ShopApp";
import Cart from "pages/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/app' element={<ShopApp/>} />
      <Route path='/product/:pid' element={<Product/>} />
      <Route path='/cart/' element={<Cart/>} />
    </Routes>
  );
}

export default App;
