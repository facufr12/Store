import React from "react";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Card from "./components/Card";
import Marquesina from "./components/Marquesina";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import Packs from "./components/Packs";
import Regiones from "./components/Regiones";
import Nosotros from "./components/Nostros";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Whatsapptoast from "./components/Whastapptoast";

export default function App() {
  return (
    <>
    <Whatsapptoast />
        <Marquesina />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Nosotros />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/packs" element={<Packs />}></Route>
          <Route path="/regiones" element={<Regiones />}></Route>ç
          <Route path="/nosotros" element={<Nosotros />}></Route>
        </Routes>
      </Router>
      

      <Footer />
   </>
  );
}
