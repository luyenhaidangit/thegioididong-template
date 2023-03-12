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


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} />
            {/* <Route path='productcategory' element={<ProductCategory />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
