import React from "react";
import NavBar from "./NavBar.jsx";
import { Route, Routes } from "react-router";
import "./css/homestyle.css";
import İndex from "./Home/index.jsx";
import Feature from "./Features/Feature.jsx";
import About from "./AboutUs/index.jsx";
import Pindex from "./Pricing/Pindex.jsx";
import Cindex from "./Contact/Cindex.jsx";
import Blogİndex from "./Blog/Blogİndex.jsx";
import Faqİndex from "./FAQ/Faqİndex.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<İndex />}></Route>
        <Route path="/Pricing" element={<Pindex />}></Route>
        <Route path="/Features" element={<Feature />}></Route>
        <Route path="/Aboutus" element={<About />}></Route>
        <Route path="/contact" element={<Cindex />}></Route>
        <Route path="/Blog" element={<Blogİndex />}></Route>
        <Route path="/FAQ" element={<Faqİndex/>}></Route>
      </Routes>
    </>
  );
}

export default App;
