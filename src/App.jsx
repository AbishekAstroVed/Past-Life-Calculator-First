import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReportPage from './pages/ReportPage'
import CosmicCanvasBackground from './components/CosmicBackground/CosmicCanvasBackground'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden w-full font-sans text-dark-navy">
        {/* Full-Page Dynamic Living Cosmic Animation Canvas */}
        <CosmicCanvasBackground />

        {/* Page Content Layers */}
        <div className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
