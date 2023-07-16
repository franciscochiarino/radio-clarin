import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bulma/css/bulma.css'

import Navbar from './components/partials/Navbar'
import Home from './components/pages/Home'
import Gardel from './components/pages/Gardel'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gardel" element={<Gardel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
