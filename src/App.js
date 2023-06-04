// Libraries
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Layout from './components/Layouts/Layout';

import Product from './pages/Product'

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Styles/Common/Common.css'
import Home from './components/Home/Home';
import ProductCategory from './pages/ProductCategory';
import Cart from './components/Pages/Cart/Cart';
import Login from './pages/Login';
import CheckOut from './components/Pages/Cart/CheckOut';
import { ToastContainer } from 'react-toastify';



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
            <Route path='xac-nhan-don-hang' element={<CheckOut />} />
            <Route path='dang-nhap' element={<Login />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
