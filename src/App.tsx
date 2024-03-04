import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetail/ProductDetails';
import Cart from './Components/Cart/Cart';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/details' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
