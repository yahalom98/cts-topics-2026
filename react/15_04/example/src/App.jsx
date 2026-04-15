import React from "react";
import Ecommerce from "./components/Ecommerce";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

export default function App() {
  return (

    <BrowserRouter>
        <div className="nav-container">
          <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/Ecommerce'}>Ecommerce</Link>
            </li>
            <li>
                <Link to={'/Contact'}>Leen</Link>
            </li>
          </ul>
        </div>

      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
