import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Products from "./Products";
import Product from "./Product";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="products" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
