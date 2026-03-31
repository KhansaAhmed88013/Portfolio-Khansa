import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Khansa Ahmed — Built with React
      </footer>
    </div>
  )
}
