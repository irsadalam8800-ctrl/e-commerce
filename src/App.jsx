import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './component/Home'
import Man from './component/Man'
import Girl from './component/Girl'
import Jeans from "./item/Jeans";
import Tshirt from "./item/Tshirt";
import Shirt from './item/Shirt';
import Cart from './component/Card';
import Login from "./component/Login";


function App() {
  const [count, setCount] = useState(0);


  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, product]);
};
  return (
   <>
  <Navbar cart={cart}/>

   <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/men" element={<Man addToCart={addToCart} />}/>
     <Route path="/girl" element={<Girl/>} />
     <Route path="/shirts" element={<Shirt addToCart={addToCart}/>} />
     <Route path="/tshirts"element={<Tshirt addToCart={addToCart} />}/>
     <Route path="/jeans"element={<Jeans addToCart={addToCart} />}/>
   <Route path="/cart" element={<Cart cart={cart}/>} />
   <Route path="/login" element={<Login />} />
   </Routes>
   </>
  )
}

export default App
