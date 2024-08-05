import { useState } from "react";

import "./App.css";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Home from "./Home";
import ArtCulture from "./ArtCulture";
import Staycation from "./staycation";

import AboutMe from "./AboutMe";
import FoodDrink from "./FoodDrink";
import Mobility from "./Mobility";
import Shopping from "./Shopping";
import MultiSteps from "./MultiSteps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArtCulture/" element={<ArtCulture />} />
        <Route path="/FoodDrink/" element={<FoodDrink />} />
        <Route path="/Mobility/" element={<Mobility />} />
        <Route path="/AboutMe/" element={<AboutMe />} />
        <Route path="/Staycation/" element={<Staycation />} />
        <Route path="/MultiSteps/" element={<MultiSteps />} />
        <Route path="/Shopping/" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
