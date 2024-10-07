import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'
import Product from './Product';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from './Login.jsx'

function App() {
  {/*TA18*/}
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/*TA18*/}
        <Route
          path="/contact"
          element={
            isAuthenticated ? <Contact /> : <Navigate to="/login" element={<Login/>}/>
          }
        />
        {/*TA17*/}
        <Route path="/product/:id" element={<Product />} />

        {/*TA18*/}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/*TA17*/}
          <li><Link to="/product/1">Product 1</Link></li>
          <li><Link to="/product/2">Product 2</Link></li>
          <li><Link to="/product/3">Product 3</Link></li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default App;