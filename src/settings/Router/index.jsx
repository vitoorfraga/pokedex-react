import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Pokedex from "../../pages/Pokedex";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Pokedex />} path="pokedex" />
      </Routes>
    </Router>
  );
};

export default Routers;
