import React from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Work from './work/work'
import Footer from './footer'

import UniversityDatabase from './work/Development/WorldInstitutionDatabase/worldinstitutiondatabase'
import GeoMemories from './work/Development/GeoMemories/geomemories'
import FinestCup from './work/Design/FinestCup/finestcup'
import ExperienceDesign from './work/Design/ExperienceDesign/experiencedesign'
import EducationVisualAnalytic from './work/Development/EducationVisualAnalytics/educationvisualanalytics'
import PersonalPortfolio from './work/Development/PersonalPortfolio/personalportfolio'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path='/work' element={<Work />} />
        <Route
          exact
          path='/work/world-institution-database'
          element={<UniversityDatabase />}
        />
        <Route
          exact
          path='/work/education-visual-analytics'
          element={<EducationVisualAnalytic />}
        />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
