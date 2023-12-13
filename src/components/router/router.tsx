import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Help from "../help/help";
import Products from "../products/products";
import MainLayout from "../layouts/main_layouts";
import Product from "../products/product/product";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="helps" element={<Help />} />
    </Route>
  </Routes>
)

export default Router;
// what goes here??
