// Libraries
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Layout from './components/Layouts/Layout';
import Home from './pages/Home';
import Product from './pages/Product'

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Styles/Common/Common.css'
import ProductCategory from './pages/ProductCategory';
import Cart from './components/Pages/Cart/Cart';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='san-pham/:id' element={<Product />} />
            <Route path='loai-san-pham/:id' element={<ProductCategory />} />
            <Route path='gio-hang' element={<Cart />} />
            <Route path='dang-nhap' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
