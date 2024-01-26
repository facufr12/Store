import React from "react";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Card from "./components/Card";
import Marquesina from "./components/Marquesina";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Marquesina />
      <BrowserRouter>
        <NavBar />
        <div className="Cardcontainer">
          <Card />
          <Card />
          <Card />

          <Card />

          <Card />

          <Card />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
