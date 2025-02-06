import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about"; 
import Navbar1 from "../components/navbar1";
import Todo from "../components/t1"
import  Useffect1  from "../components/useeffect";
import Drawer from "../components/drawer";
import Product from "../pages/product/product";
import Contact from "../pages/contact/contact";
function Applayout() {
  return (
    <Router>
      <Navbar1 />
      {/* <Drawer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/t1" element={<Todo />} />
        <Route path="/e" element={<Useffect1 />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Applayout;
