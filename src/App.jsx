import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Home from "./Home";
import ArtCulture from "./ArtCulture";
import Staycation from "./staycation";

import AboutMe from "./AboutMe";
import FoodDrink from "./FoodDrink";
import Mobility from "./Mobility";
import Shopping from "./Shopping";

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
        {/* <Route path="/Attractions/" element={<Attractions />} /> */}
        <Route path="/Shopping/" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
