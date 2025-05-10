import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, useColorMode } from '@chakra-ui/react'
import Navbar from './components/navbar/Navbar'
import FloatingSettings from './components/settings/FloatingSettings'
import Home from './pages/home'
import About from './pages/about'
import Experience from './pages/experience'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './components/Footer/Footer'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
function App() {
  const { colorMode } = useColorMode()

  useEffect(() => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])




  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Box
        backgroundColor={colorMode === 'light' ? '#F7FAFC' : '#1A202C'}
        minHeight="100vh"
        position="relative"
      >
        <Navbar />
        <FloatingSettings />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  )
}

export default App
