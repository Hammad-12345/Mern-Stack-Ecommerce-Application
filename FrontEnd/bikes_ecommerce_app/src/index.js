import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Admin routes components import
import DashboardAdmin from "./WebPanels/AdminPanel/Pages/Dashboard";
import Blogs from "./WebPanels/AdminPanel/Pages/Blogs";
import AddCategoryAdmin from "./WebPanels/AdminPanel/Pages/AddCategory";
import BikesForSales from "./WebPanels/AdminPanel/Pages/BikesForSales";
import Product from "./WebPanels/AdminPanel/Pages/Product";
import ProductOrderAdmin from "./WebPanels/AdminPanel/Pages/ProductOrder";
// Admin routes components import

// Website routes components import
import Home from "./Website/Pages/Home";
import ShopAll from "./Website/Pages/ShopAll";
import BlogsWebsite from "./Website/Pages/Blogs";
import BikesForSalesWebsite from "./Website/Pages/BikesForSales";
import VlogsWebsite from "./Website/Pages/Vlogs";
// Website routes components import
function BikesEcommerceApplication() {
  return (
    <>
      <Routes>
        {/* Admin Routes */}
        <Route path="/DashboardAdmin" element={<DashboardAdmin />}></Route>
        <Route path="/Category" element={<AddCategoryAdmin />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Blog" element={<Blogs />}></Route>
        <Route path="/BikesForSales" element={<BikesForSales />}></Route>
        <Route
          path="/ProductOrderAdmin"
          element={<ProductOrderAdmin />}
        ></Route>

        {/* Admin Routes */}

        {/* Website Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/ShopAll" element={<ShopAll />}></Route>
        <Route path="/Blogs" element={<BlogsWebsite />}></Route>
        <Route path="/BikesSales" element={<BikesForSalesWebsite />}></Route>
        <Route path="/Vlogs" element={<VlogsWebsite />}></Route>
        {/* Website Routes */}
      </Routes>
    </>
  );
}

ReactDom.render(
  <BrowserRouter>
    <BikesEcommerceApplication />
  </BrowserRouter>,
  document.getElementById("root")
);
