import React from "react";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Work from "./work/work";
import Footer from "./footer";

import UniversityDatabase from "./work/worldinstitutiondatabase";
import GeoMemories from "./work/geomemories";
import FinestCup from "./work/finestcup";
import ExperienceDesign from "./work/experiencedesign";
import EducationVisualAnalytic from "./work/educationvisualanalytics";
import PersonalPortfolio from "./work/personalportfolio";

import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box flex={1}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/work" element={<Work />} />
          <Route
            exact
            path="/work/worldinstitutiondatabase"
            element={<UniversityDatabase />}
          />
          <Route exact path="/work/geomemorioes" element={<GeoMemories />} />
          <Route exact path="/work/finestcup" element={<FinestCup />} />
          <Route
            exact
            path="/work/experiencedesign"
            element={<ExperienceDesign />}
          />
          <Route
            exact
            path="/work/educationvisualanalytic"
            element={<EducationVisualAnalytic />}
          />
          <Route
            exact
            path="/work/personalportfolio"
            element={<PersonalPortfolio />}
          />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
};

export default App;
