import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import FloatingSettings from './components/settings/FloatingSettings'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#FBF8F0', minHeight: '100vh', paddingTop: '100px' }}>
        <Navbar />
        <FloatingSettings />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
