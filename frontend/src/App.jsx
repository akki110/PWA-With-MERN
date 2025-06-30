import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product_List } from "./Component/Product_List";
import { Product } from "./Component/Product";
import { Product_Add } from "./Component/Product_Add";
import { Product_Update } from "./Component/Product_Update";
import { Navbar } from "./Component/Navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Product_List />} />
          <Route path="/single/:id" element={<Product />} />
          <Route path="/add" element={<Product_Add />} />
          <Route path="/update/:id" element={<Product_Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
