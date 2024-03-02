import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<AllProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
