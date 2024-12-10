import './App.css';
import { Route, Routes } from 'react-router';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

function App() {
  return <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}

export default App;
