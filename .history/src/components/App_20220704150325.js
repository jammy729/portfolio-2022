import React from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Work from './work/work'
import Contact from "./contact"
import UniversityDatabase from './work/Development/WorldInstitutionDatabase/worldinstitutiondatabase'
import EducationVisualAnalytic from './work/Development/EducationVisualAnalytics/educationvisualanalytics'

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
        <Route exact path="/contact" element={<Contact />}
      </Routes>
    </Router>
  )
}

export default App
