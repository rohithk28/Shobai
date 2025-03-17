import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';

import Homepage from './Landingpage/home/Homepage';
import SignUp from './Landingpage/signup/SignUp';
import About from './Landingpage/about/Aboutpage';
import Products from './Landingpage/products/Productspage';
import Pricing from './Landingpage/pricing/Pricingpage';
import Support from './Landingpage/support/Support';

import Notfound from './Landingpage/Notfound';
import Navbar from './Landingpage/Navbar';
import Footer from './Landingpage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/support" element={<Support />}/>
    <Route path="*" element={<Notfound />}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);


