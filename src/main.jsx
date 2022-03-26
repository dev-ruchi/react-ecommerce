import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home'
import Product from './pages/Product'
import MainNavbar from './components/common/MainNavbar'

ReactDOM.render(
  <React.StrictMode>
    <MainNavbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:slug" element={<Product />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
