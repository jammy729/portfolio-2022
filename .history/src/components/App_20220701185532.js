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
        <Route exact path='/work/geomemories' element={<GeoMemories />} />
        <Route
          exact
          path='/work/educationvisualanalytics'
          element={<EducationVisualAnalytic />}
        />
        <Route
          exact
          path='/work/personalportfolio'
          element={<PersonalPortfolio />}
        />

        <Route exact path='/work/finestcup' element={<FinestCup />} />
        <Route
          exact
          path='/work/experiencedesign'
          element={<ExperienceDesign />}
        />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
