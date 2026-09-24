import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReportPage from './pages/ReportPage'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark-navy overflow-hidden w-full font-sans text-off-white">
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-teal-900/20 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute top-[30%] left-[-5%] w-[40vw] h-[40vw] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-800/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
