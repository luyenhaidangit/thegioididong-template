// Library
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Client
import Layout from './components/Layout/Client/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product' element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
