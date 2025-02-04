import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about"; 
import Navbar from "../components/navbar";
import Todo from "../components/t1"
import  Useffect1  from "../components/useeffect";
function Applayout() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/t1" element={<Todo />} />
        <Route path="/e" element={<Useffect1 />} />
      </Routes>
    </Router>
  );
}

export default Applayout;
