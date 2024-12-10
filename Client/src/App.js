import './App.css';
import { Route, Routes } from 'react-router';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Data from './Data.json'
import { useState } from 'react';

function App() {
    const [products, setProducts] = useState(Data);
  
  return <>
      <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}

export default App;
