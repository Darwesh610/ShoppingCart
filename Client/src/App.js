import './App.css';
import { Route, Routes } from 'react-router';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import data from './Data.json'

function App() {
  return <>
      <Routes>
      <Route path="/" element={<Home products={data} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}

export default App;
